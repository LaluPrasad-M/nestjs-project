import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestEntity } from './typeorm.entity';
import { TestParamsDTO } from './typeorm.model';

@Injectable()
export class TypeormService {
  constructor(
    @InjectRepository(TestEntity)
    private readonly testRepo: Repository<TestEntity>,
  ) {}

  async getTestEntity(id: number) {
    return await this.testRepo
      .createQueryBuilder('test')
      .where('test.id = :id', { id: id })
      .cache(60000) // 1 minute
      .getOne();
    // return await this.testRepo.findOne({
    //   where: { id: id },
    //   cache: true,
    // });
  }

  async createTestEntity(testEntity: TestParamsDTO) {
    const newTestEntity = new TestEntity({
      username: testEntity.username || 'test',
      description: testEntity.description,
    });
    await this.testRepo.save(newTestEntity);
    return newTestEntity;
  }
}
