import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { DogResolver } from './dog.resolver';

@Module({
  controllers: [DogController],
  providers: [DogService, DogResolver],
})
export class DogModule {
  constructor() {
    console.log('DogModule');
  }
}
