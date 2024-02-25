import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestEntity } from './typeorm.entity';

@Injectable()
export class TypeormService {
  constructor(
    @InjectRepository(TestEntity)
    private readonly testRepo: Repository<TestEntity>,
  ) {}

  async getTestEntity(id: number) {
    return await this.testRepo.findOne({
      where: { id: id },
    });
  }

  async createTestEntity(testEntity: TestEntity) {
    const newTestEntity = new TestEntity({
      username: testEntity.username || 'test',
      description: testEntity.description || 'test Desc',
    });
    await this.testRepo.save(newTestEntity);
    return testEntity;
  }
}
