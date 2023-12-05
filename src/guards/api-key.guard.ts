import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const apiKey = process.env['API_KEY'];

    if (!apiKey) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const apiKeyHeader = request.headers['apikey'];

    if (!apiKeyHeader || apiKeyHeader !== apiKey) return false;

    return true;
  }
}
