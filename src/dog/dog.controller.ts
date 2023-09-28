import { Controller, Get, Logger } from '@nestjs/common';

@Controller('/dog')
export class DogController {
  private readonly logger = new Logger(DogController.name);

  constructor() {
    console.log('DogController');
  }

  @Get()
  dog() {
    this.logger.debug('dog');
    return 'dog';
  }
}
