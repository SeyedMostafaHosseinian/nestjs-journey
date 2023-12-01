import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigurationService } from './config/configuration.service';

@Controller()
export class AppController {
  constructor(
    @Inject('OBJECT-1') private readonly injectedValue: any,
    private readonly configService: ConfigurationService
    ) {
    console.log(this.injectedValue);
    console.log(process.env?.NODE_ENV);
    this.configService.sayMode()
  }

  @Get()
  getHello() {
    return 'Wellcome to API';
  }
}
