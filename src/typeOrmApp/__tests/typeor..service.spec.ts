import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeormService } from '../typeorm.service';
import { TestEntity } from '../typeorm.entity';
import { TestParamsDTO } from '../typeorm.model';

describe('TypeormService', () => {
  let service: TypeormService;
  let repo: Repository<TestEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypeormService,
        {
          provide: getRepositoryToken(TestEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<TypeormService>(TypeormService);
    repo = module.get<Repository<TestEntity>>(getRepositoryToken(TestEntity));
  });

  it('should return a test entity by id', async () => {
    const testEntity = new TestEntity({
      username: 'test',
      description: 'test',
    });
    jest.spyOn(repo, 'createQueryBuilder').mockReturnValue({
      where: jest.fn().mockReturnThis(),
      cache: jest.fn().mockReturnThis(),
      getOne: jest.fn().mockResolvedValue(testEntity),
    } as any);

    expect(await service.getTestEntity(1)).toEqual(testEntity);
  });

  it('should return null if test entity not found', async () => {
    jest.spyOn(repo, 'createQueryBuilder').mockReturnValue({
      where: jest.fn().mockReturnThis(),
      cache: jest.fn().mockReturnThis(),
      getOne: jest.fn().mockResolvedValue(null),
    } as any);

    expect(await service.getTestEntity(1)).toBeNull();
  });

  it('should create a test entity', async () => {
    const testParams = { username: 'test', description: 'test' };
    const testEntity = new TestEntity(testParams);
    jest.spyOn(repo, 'save').mockResolvedValue(testEntity);

    expect(await service.createTestEntity(testParams)).toEqual(testEntity);
  });

  it('should create a test entity with default username if not provided', async () => {
    const testParams = new TestParamsDTO();
    const testEntity = new TestEntity({ ...testParams, username: 'test' });
    jest.spyOn(repo, 'save').mockResolvedValue(testEntity);

    expect(await service.createTestEntity(testParams)).toEqual(testEntity);
  });
});
