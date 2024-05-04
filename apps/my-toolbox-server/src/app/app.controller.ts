import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Query() query: { n1: string; n2: string }) {
    const { n1, n2 } = query;
    return this.appService.getData(+n1, +n2);
  }
}
