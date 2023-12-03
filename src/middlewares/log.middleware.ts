import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('----------------------------');
    console.log(`
      
          'HI I'M [-- LogMiddleware --]'
      
      `);
    // console.log(req);
    // console.log(res);
    console.log('----------------------------');
    next();
  }
}
