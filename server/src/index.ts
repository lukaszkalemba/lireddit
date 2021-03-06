import { MikroORM } from '@mikro-orm/core';
import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import microOrmConfig from 'mikro-orm.config';
import { IS_PRODUCTION_MODE } from 'utils/constants';
import { PostResolver } from 'resolvers/post';
import { UserResolver } from 'resolvers/user';
import 'reflect-metadata';

dotenv.config({ path: 'config/config.env' });

const main = async () => {
  const orm = await MikroORM.init(microOrmConfig);
  orm.getMigrator().up();

  const app: Application = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

  app.use(
    session({
      name: 'qid',
      store: new RedisStore({
        client: redisClient,
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
    context: ({ req, res }) => ({ em: orm.em, req, res }),
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
