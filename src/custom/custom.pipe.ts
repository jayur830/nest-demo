import {
  ArgumentMetadata,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  private readonly logger = new Logger(CustomPipe.name);

  transform(value: any, metadata: ArgumentMetadata) {
    this.logger.debug(value, metadata);
    return value;
  }
}
