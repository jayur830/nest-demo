import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    console.log('AppService');
  }

  getHello() {
    return {
      text: 'Hello World!',
    };
  }

  getTest() {
    return 'test';
  }
}
