import {
  Parent,
  Query,
  ResolveField,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { Dog } from './dog.object';

@Resolver()
export class DogResolver {
  @Query(() => Dog)
  animal() {
    return {
      hello: 'hello',
    };
  }

  // @ResolveField()
  // hello(@Parent() animal: Dog) {
  //   return animal.hello;
  // }
}
