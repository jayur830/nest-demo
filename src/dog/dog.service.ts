import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  constructor() {
    console.log('DogService');
  }
}
