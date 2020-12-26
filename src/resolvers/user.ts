import {
  Resolver,
  Arg,
  Mutation,
  InputType,
  Field,
  Ctx,
  ObjectType,
} from 'type-graphql';
import argon2 from 'argon2';
import { Context } from '../types';
import { User } from '../entities/User';

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

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
  async registerUser(
    @Arg('options') { username, password }: UsernamePasswordInput,
    @Ctx() { em }: Context
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

    if (username.length <= 3) {
      return {
        errors: [
          {
            field: 'username',
            message: 'Lenght must be greater than 3',
          },
        ],
      };
    }

    if (password.length <= 5) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Lenght must be greater than 5',
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(password);

    user = em.create(User, { username, password: hashedPassword });
    await em.persistAndFlush(user);

    return { user };
  }

  @Mutation(() => UserResponse)
  async loginUser(
    @Arg('options') { username, password }: UsernamePasswordInput,
    @Ctx() { em }: Context
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username });

    if (!user) {
      return {
        errors: [
          {
            field: 'username',
            message: "That username doesn't exist",
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

    return { user };
  }
}
