import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
 

  @Get() // HOME PAGE
  getHello(): string {
    return 'Hello World!';
  }
}
