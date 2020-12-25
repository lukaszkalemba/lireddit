import { MikroORM } from '@mikro-orm/core';
import microOrmConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(microOrmConfig);

  orm.getMigrator().up();
};

main().catch((err) => console.error(err));
