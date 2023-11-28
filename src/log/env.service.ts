import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvService {
  getEnv(name: string): any {
    return process.env[name];
  }
}
