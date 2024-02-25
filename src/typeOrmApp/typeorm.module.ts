import { Module } from '@nestjs/common';
import { getTypeORMModule } from './config/get-typeORM-module';

@Module({
  imports: [getTypeORMModule()],
})
export class TypeormModule {}
