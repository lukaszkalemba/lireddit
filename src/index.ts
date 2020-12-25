import { MikroORM } from '@mikro-orm/core';
import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import microOrmConfig from './mikro-orm.config';
import { PostResolver } from './resolvers/post';
import 'reflect-metadata';

const main = async () => {
  const orm = await MikroORM.init(microOrmConfig);
  orm.getMigrator().up();

  const app: Application = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({ app });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
};

main().catch((err) => console.error(err));
