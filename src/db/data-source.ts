import dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();


export const dataSourceConfig = {
  type: 'postgres',
  host: process.env?.DB_HOST || 'localhost',
  port: process.env?.DB_PORT ? +process.env?.DB_PORT : 5432,
  username: process.env?.DB_USERNAME,
  password: process.env?.DB_PASSWORD + '',
  database: process.env?.DB_NAME,
  synchronize: process.env?.DB_SYNC,
  logging: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  subscribers: [],
  migrationsTableName: 'migrations',
}

const dataSource = new DataSource(dataSourceConfig as DataSourceOptions )

export default dataSource;
