import { DynamicModule, Module } from '@nestjs/common';
import { CatModule } from 'src/cat/cat.module';
import { DogModule } from 'src/dog/dog.module';
import { DogResolver } from 'src/dog/dog.resolver';

@Module({
  providers: [DogResolver],
})
export class AnimalModule {
  constructor() {
    console.log('AnimalModule');
  }

  static forRoot(modules = []): DynamicModule {
    return {
      module: AnimalModule,
      imports: modules,
    };
  }
}
