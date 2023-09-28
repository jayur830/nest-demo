import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { CatService } from 'src/cat/cat.service';

@Module({
  controllers: [PersonController],
  providers: [PersonService, CatService],
  exports: [PersonService],
})
export class PersonModule {
  constructor() {
    console.log('PersonModule');
  }
}
