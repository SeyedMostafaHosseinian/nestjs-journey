import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { EnvModule } from './log/env.module';
import { ConfigurationService } from './config/configuration.service';
import { DevConfigurationService } from './config/dev-configuration.service';
import { ProdConfigurationService } from './config/prod-configuration.service';
import { dataSourceConfig } from './db/data-source';
import { LogMiddleware, logFunMiddleware } from './middlewares';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceConfig as TypeOrmModuleOptions),
    EnvModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    //value provider
    {
      provide: 'OBJECT-1',
      useValue: { name: 'an objected that provided by useValue and injected' },
    },
    //class provider
    {
      provide: ConfigurationService,
      useClass:
        process.env?.NODE_ENV === 'development'
          ? DevConfigurationService
          : ProdConfigurationService,
    },
    //factory provider
    {
      provide: 'PROVIDER_BY_USE_FACTORY',
      useFactory: () => 'value returned from and factory provider',
      inject: [],
    },
  ],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(LogMiddleware, logFunMiddleware)
      // .exclude('users', {path:'tasks', method: RequestMethod.OPTIONS})
      // .forRoutes({ path:'users', method: RequestMethod.GET })
      // .forRoutes('*');
  }
}
