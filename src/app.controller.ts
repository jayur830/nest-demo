import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  HostParam,
  HttpCode,
  HttpStatus,
  Inject,
  Next,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  Sse,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { CustomPipe } from './custom/custom.pipe';
import { Cron, Interval } from '@nestjs/schedule';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Observable, interval, map } from 'rxjs';

@Controller()
export class AppController {
  @Inject('APP_SERVICE')
  private readonly appService: AppService;

  constructor() {
    console.log('AppController');
  }

  // @Interval('test cron', 5000)
  // testCron() {
  //   console.log('test');
  // }

  @Get(':uuid')
  getHello(
    @Query('uuid', CustomPipe)
    uuid: string,
  ) {
    console.log(uuid, typeof uuid);
    return this.appService.getHello();
  }

  @Get()
  test() {
    return this.appService.getTest();
  }

  @Get('/download/test')
  downloadFileTest(@Res() response: Response) {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    file.pipe(response);
  }

  @Sse('/test/sse')
  sse(): Observable<{ data: { hello: string } }> {
    return interval(1000).pipe(
      map(() => {
        const data = { data: { hello: 'world' } };
        console.log(data);
        return data;
      }),
    );
  }
}
