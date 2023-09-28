import { Controller, Get, Logger } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('/cat')
export class CatController {
  private readonly logger = new Logger(CatController.name);

  constructor(private readonly catService: CatService) {
    console.log('CatController');
  }

  @Get()
  cat() {
    this.logger.debug('cat');
    return this.catService.getName();
  }
}
