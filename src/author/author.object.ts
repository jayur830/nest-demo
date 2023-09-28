import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from './post.object';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => [Post])
  postList: Post[];
}
