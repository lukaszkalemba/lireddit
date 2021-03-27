import express, { Application } from 'express';
import { createConnection } from 'typeorm';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { COOKIE_NAME, IS_PRODUCTION_MODE } from 'utils/constants';
import { PostResolver } from 'resolvers/post';
import { UserResolver } from 'resolvers/user';
import { Post } from 'entities/Post';
import { User } from 'entities/User';
import 'reflect-metadata';

dotenv.config({ path: 'config/config.env' });

const main = async () => {
  const conn = await createConnection({
    type: 'postgres',
    database: 'lireddit',
    username: 'postgres',
    password: 'postgres',
    logging: true,
    synchronize: true,
    entities: [Post, User],
    migrations: [path.join(__dirname, './migrations/*')],
  });

  await conn.runMigrations();

  const app: Application = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis as any,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: 'lax',
        secure: IS_PRODUCTION_MODE,
      },
      secret: 'AfrGtkBvlc36hsJerty90tru4ewj3rKlTgfdjh1wdefpgjfbvKlSwgdB',
      saveUninitialized: false,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, redis }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: {
      origin: false,
    },
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
};

main().catch((err) => console.error(err));
