import { Module, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { EnvModule } from './log/env.module';
import { ConfigurationService } from './config/configuration.service';
import { DevConfigurationService } from './config/dev-configuration.service';
import { ProdConfigurationService } from './config/prod-configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: process.env?.DB_PORT ? +process.env?.DB_PORT : 5432,
      username: process.env.DB_USERNAME,
      password: process.env.POSTGRES_PASSWORD + '',
      database: process.env.POSTGRES_DB,
      synchronize: true,
      logging: false,
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/migrations/**/*.js'],
      subscribers: [],
      migrationsTableName: 'migrations',
    }),
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
  exports:[]
})
export class AppModule {}
