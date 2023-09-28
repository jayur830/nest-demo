import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { PersonModule } from './person/person.module';
import { PersonService } from './person/person.service';
import { DogModule } from './dog/dog.module';
import { CatModule } from './cat/cat.module';
import { AppMiddleware } from './app.middleware';
import { ScheduleModule } from '@nestjs/schedule';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { AuthorResolver } from './author/author.resolver';

@Module({
  // imports: [PersonModule, AnimalModule],
  imports: [
    ScheduleModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: '/api/graphql',
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': {
          path: '/api/graphql',
        },
      },
    }),
    PersonModule,
    AnimalModule.forRoot([DogModule, CatModule]),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_SERVICE',
      useClass: AppService,
    },
    AppResolver,
    AuthorResolver,
  ],
})
export class AppModule implements NestModule {
  constructor() {
    console.log('AppModule');
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes(
      {
        path: '/person/*',
        method: RequestMethod.GET,
      },
      {
        path: '/cat',
        method: RequestMethod.GET,
      },
      {
        path: '/dog',
        method: RequestMethod.GET,
      },
    );
  }
}
