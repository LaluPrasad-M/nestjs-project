import { DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeORMOptions } from './get-typeORM-module-options';

export function getTypeORMModule(): DynamicModule {
  return TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      console.log(JSON.stringify(getTypeORMOptions(configService)));
      return getTypeORMOptions(configService);
    },
  });
}
