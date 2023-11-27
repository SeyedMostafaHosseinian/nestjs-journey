import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

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
      logging: true,
      entities: ['dist/entities/**/*.entity.js',],
      migrations: ['dist/migrations/**/*.js'],
      subscribers: [],
      migrationsTableName: 'migrations', 
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
