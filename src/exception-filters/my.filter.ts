import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class MyFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(500).json({
      message: 'helllllloooooo im MyFilter',
    });
  }
}
