import { MiddlewareFn } from 'type-graphql';
import { Context } from 'utils/types';

export const isAuth: MiddlewareFn<Context> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error('not authenticated');
  }

  return next();
};
