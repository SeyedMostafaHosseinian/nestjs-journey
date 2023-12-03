import { EnvService } from './../log/env.service';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UsersService,

    // {
    //   provide:'TOKEN_ONE',
    //   useValue:'hello im a value provider'
    // },

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
})
export class UsersModule {
  constructor(private readonly envService: EnvService) {
    console.log(this.envService.getEnv('APP_NAME'));
  }
}
