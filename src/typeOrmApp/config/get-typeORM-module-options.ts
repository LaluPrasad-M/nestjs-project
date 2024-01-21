import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import { LogLevel } from 'typeorm';
import { NodeEnv } from '../../globalLib/constants';

const DATABASE_URL = process.env.DATABASE_URL;
const isDev = process.env.NODE_ENV === NodeEnv.DEVELOPMENT;
const isStage = process.env.NODE_ENV === NodeEnv.STAGE;
export function getSynchronize(): boolean {
  // return True ONLY in dev mode or else DB data might me lost
  return isDev;
}

const getLoggingState = (): boolean | LogLevel[] => {
  if (isStage) return ['error'];
  return isDev;
};

const baseDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  schema: 'nestjs_app',
  entities: [__dirname + '/entities/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'typeorm_migrations',
  namingStrategy: new SnakeNamingStrategy(),
  logging: getLoggingState(),
  synchronize: getSynchronize(),
};

const singlePostgresConnectionCredentialsOptions: DataSourceOptions = {
  ...baseDataSourceOptions,
  url: DATABASE_URL,
  ssl: false,
};

export const options: TypeOrmModuleOptions = {
  ...singlePostgresConnectionCredentialsOptions,
  retryAttempts: 10,
  retryDelay: 3000,
  autoLoadEntities: true,
};

export const getTypeORMOptions = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return !configService.get<boolean>('ENABLE_REDIS_CACHE_FOR_TYPEORM', false)
    ? options
    : {
        ...options,
        cache: {
          type: 'ioredis',
          options: {
            port: configService.get<number>('REDIS_PORT', 6379),
            host: configService.get<string>('REDIS_HOST', 'localhost'),
            password: configService.get<string>('REDIS_PASSWORD', ''),
            username: configService.get<string>('REDIS_USERNAME', 'default'),
            tls: false,
          },
        },
      };
};
