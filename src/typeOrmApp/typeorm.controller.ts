import { Controller, Logger, Post, Get, Param, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { TestEntity } from './typeorm.entity';
import { TypeormService } from './typeorm.service';
@Controller('typeorm')
export class TypeormController {
  constructor(private readonly typeormService: TypeormService) {}
  private readonly logger = new Logger(TypeormController.name);

  @Get(':id')
  async getTestEntity(
    @Param('id')
    id: number,
  ) {
    this.logger.log(`Get request received for TestEntity: ${id}`);
    return this.typeormService.getTestEntity(id);
  }
  @ApiBody({ type: TestEntity })
  @Post('new')
  async createTestEntity(@Body() testEntity: TestEntity) {
    this.logger.log(`Post request received for TestEntity`);
    return this.typeormService.createTestEntity(testEntity);
  }
}
