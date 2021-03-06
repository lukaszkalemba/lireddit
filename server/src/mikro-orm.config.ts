import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { IS_PRODUCTION_MODE } from './utils/constants';
import { Post } from './entities/Post';
import { User } from './entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: 'lireddit',
  user: 'postgres',
  password: '',
  type: 'postgresql',
  debug: !IS_PRODUCTION_MODE,
} as Parameters<typeof MikroORM.init>[0];
