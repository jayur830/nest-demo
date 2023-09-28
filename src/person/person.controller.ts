import {
  Controller,
  ForbiddenException,
  Get,
  Logger,
  UseFilters,
} from '@nestjs/common';
import { CatService } from 'src/cat/cat.service';
import { ThrowableFilter } from 'src/throwable/throwable.filter';

@Controller('/person')
export class PersonController {
  private readonly logger = new Logger(PersonController.name);

  constructor(private readonly catService: CatService) {
    console.log('PersonController');
  }

  @Get('/neck')
  @UseFilters(ThrowableFilter)
  neck() {
    this.logger.debug('neck');
    // throw new ForbiddenException('FORBIDDEN', { cause: 'wtf' });
    return this.catService.getName();
  }
}
