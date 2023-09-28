import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
  constructor() {
    console.log('PersonService');
  }
}
