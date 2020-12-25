import { Resolver, Query, Ctx } from 'type-graphql';
import { Post } from '../entities/Post';
import { Context } from '../types';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: Context): Promise<Post[]> {
    return em.find(Post, {});
  }
}
