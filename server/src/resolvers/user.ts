import {
  Resolver,
  Arg,
  Mutation,
  Field,
  Ctx,
  ObjectType,
  Query,
} from 'type-graphql';
import argon2 from 'argon2';
import { v4 } from 'uuid';
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from 'utils/constants';
import { Context } from 'utils/types';
import { User } from 'entities/User';
import { UsernamePasswordInput } from './UsernamePasswordInput';
import { validateRegister } from 'helpers/validateRegister';
import { sendEmail } from 'helpers/sendEmail';

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async changePassword(
    @Arg('token') token: string,
    @Arg('newPassword') newPassword: string,
    @Ctx() { redis, em, req }: Context
  ): Promise<UserResponse> {
    if (newPassword.length <= 5) {
      return {
        errors: [
          {
            field: 'newPassword',
            message: 'Lenght must be greater than 5',
          },
        ],
      };
    }

    const userId = await redis.get(`${FORGET_PASSWORD_PREFIX}${token}`);
    if (!userId) {
      return {
        errors: [
          {
            field: 'token',
            message: 'token expired',
          },
        ],
      };
    }

    const user = await em.findOne(User, { id: +userId });

    if (!user) {
      return {
        errors: [
          {
            field: 'token',
            message: 'user no longer exists',
          },
        ],
      };
    }

    user.password = await argon2.hash(newPassword);

    await em.persistAndFlush(user);

    // log in user after password change
    req.session.userId = user.id;

    return { user };
  }
  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg('email') email: string,
    @Ctx() { em, redis }: Context
  ) {
    const user = await em.findOne(User, { email });

    if (!user) {
      return false;
    }

    const token = v4();

    await redis.set(
      `${FORGET_PASSWORD_PREFIX}${token}`,
      user.id,
      'ex',
      1000 * 60 * 60 * 24 * 3
    );

    await sendEmail(
      'lukasz.kalemba0@gmail.com',
      'lukasz.kalemba1@gmail.com',
      'Password change',
      `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
    );

    return true;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { em, req }: Context): Promise<User | null> {
    if (!req.session.userId) {
      return null;
    }

    return em.findOne(User, { id: req.session.userId });
  }

  @Mutation(() => UserResponse)
  async registerUser(
    @Arg('options') { email, username, password }: UsernamePasswordInput,
    @Ctx() { em, req }: Context
  ): Promise<UserResponse> {
    let user = await em.findOne(User, { username });

    if (user) {
      return {
        errors: [
          {
            field: 'username',
            message: 'User with this username already exists',
          },
        ],
      };
    }

    const errors = validateRegister({ email, username, password });
    if (errors) {
      return { errors };
    }

    const hashedPassword = await argon2.hash(password);

    user = em.create(User, { email, username, password: hashedPassword });
    await em.persistAndFlush(user);

    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => UserResponse)
  async loginUser(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string,
    @Ctx() { em, req }: Context
  ): Promise<UserResponse> {
    const user = await em.findOne(
      User,
      usernameOrEmail.includes('@')
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail }
    );

    if (!user) {
      return {
        errors: [
          {
            field: 'usernameOrEmail',
            message: "That user doesn't exist",
          },
        ],
      };
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Invalid password',
          },
        ],
      };
    }

    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: Context) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
}
