import { Module } from '@nestjs/common';
import { getTypeORMModule } from './config/get-typeORM-module';
import { TypeormController } from './typeorm.controller';
import { TypeormService } from './typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './typeorm.entity';

@Module({
  imports: [getTypeORMModule(), TypeOrmModule.forFeature([TestEntity])],
  controllers: [TypeormController],
  providers: [TypeormService],
  exports: [TypeormService],
})
export class TypeormModule {}
