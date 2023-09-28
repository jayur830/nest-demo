import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class ThrowableFilter<T extends HttpException>
  implements ExceptionFilter
{
  private readonly logger = new Logger(ThrowableFilter.name);

  catch(exception: T, host: ArgumentsHost) {
    this.logger.debug('ThrowableFilter');
    const context = host.switchToHttp();
    context.getResponse<Response>().status(exception.getStatus()).json({
      code: exception.message,
      cause: exception.cause,
      statusCode: exception.getStatus(),
      timestamp: new Date().toISOString(),
      path: context.getRequest<Request>().url,
    });
  }
}
