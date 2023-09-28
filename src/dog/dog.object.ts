import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Dog {
  @Field()
  hello: string;
}
