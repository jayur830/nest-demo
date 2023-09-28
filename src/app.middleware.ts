import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AppMiddleware.name);

  constructor() {
    console.log('AppMiddleware');
  }

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.debug('AppMiddleware', req.url);
    next();
  }
}
