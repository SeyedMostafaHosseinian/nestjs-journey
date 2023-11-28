import { EnvService } from './../log/env.service';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  constructor(private readonly envService: EnvService) {
    console.log(this.envService.getEnv('APP_NAME'));
  }
}
