import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map, of, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('before reunning request...')
    const beforeNow = Date.now()
    const classR = context.getClass()
    const handler = context.getHandler()
    const type = context.getType()
    const ctx = context.switchToHttp()
    const nextR = ctx.getNext()
    // const req = ctx.getRequest();
    // return of([[[[['response from of operator']]]]])
    return next.handle().pipe(
      map(d => ({response: d})),
      tap((d) => {
      console.log(`
      #####################
      class:\n ${classR}
      ######################
      handler: ${handler}
      ######################
      type: ${type}
      ######################   
      nextR: ${nextR}   
      ######################
      response data: ${JSON.stringify(d)}      
      `)
      console.log(`requet handled in ${Date.now() - beforeNow}ms`)
    }), 
    
    );
  }
}
