import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { Author } from './author.object';
import { Post } from './post.object';

@Resolver(() => Author)
export class AuthorResolver {
  private readonly authors: Author[] = [
    {
      id: 1,
      name: 'Jame',
      postList: [
        { id: 1, title: 'a' },
        { id: 2, title: 'b' },
        { id: 3, title: 'c' },
        { id: 4, title: 'd' },
      ],
    },
    {
      id: 2,
      name: 'Watson',
      postList: [
        { id: 1, title: 'e' },
        { id: 2, title: 'f' },
        { id: 3, title: 'g' },
        { id: 4, title: 'h' },
        { id: 5, title: 'i' },
        { id: 6, title: 'j' },
      ],
    },
    {
      id: 3,
      name: 'Briton',
      postList: [
        { id: 1, title: 'k' },
        { id: 2, title: 'l' },
        { id: 3, title: 'o' },
        { id: 4, title: 'p' },
        { id: 5, title: 'q' },
        { id: 6, title: 'r' },
        { id: 7, title: 's' },
        { id: 8, title: 't' },
      ],
    },
  ];

  @Query(() => Author)
  author(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.authors.find((item) => item.id === id);
  }

  @ResolveProperty(() => Post)
  post(
    @Parent() author: Author,
    @Args({ name: 'id', type: () => Int }) id: number,
  ) {
    return author.postList.find((post) => post.id === id);
  }
}
