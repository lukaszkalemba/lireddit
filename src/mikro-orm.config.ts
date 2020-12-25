import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { IS_PRODUCTION_MODE } from './constants';
import { Post } from './entities/Post';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: 'lireddit',
  user: 'postgres',
  password: '',
  type: 'postgresql',
  debug: !IS_PRODUCTION_MODE,
} as Parameters<typeof MikroORM.init>[0];
