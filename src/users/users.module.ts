import { EnvService } from './../log/env.service';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { TasksModule } from './tasks/tasks.module';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([UserEntity]), TasksModule],
  providers: [
    UsersService,
    //factory provider
    {
      provide: 'PROVIDER_BY_USE_FACTORY',
      useFactory: (envService: EnvService, optionalDependency?: any) => {
        return [envService.getEnv('NODE_ENV'), optionalDependency];
      },
      inject: [EnvService, { token: 'TOKEN_ONE', optional: true }],
    },
    {
      provide: 'ALIAS_USER_SERVICE_TOKEN',
      useExisting: UsersService,
    },
  ],
  exports: [TasksModule]
})
export class UsersModule {}
