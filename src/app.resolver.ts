import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver()
export class AppResolver {
  @Query(() => String)
  test() {
    return 'test';
  }

  @Query(() => String, { complexity: 2 })
  foo() {
    return 'foo';
  }

  @Subscription(() => String)
  testWs() {
    return pubSub.asyncIterator('testWs');
  }

  @Mutation(() => String)
  postTestWs(@Args({ name: 'comment', type: () => String }) comment: string) {
    pubSub.publish('testWs', { comment });
    return comment;
  }
}
