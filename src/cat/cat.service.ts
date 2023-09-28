import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  constructor() {
    console.log('CatService');
  }

  getName() {
    return 'cat';
  }
}
