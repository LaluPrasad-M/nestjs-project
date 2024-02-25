import { Controller, Logger, Post, Get, Param, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { TypeormService } from './typeorm.service';
import { TestParamsDTO } from './typeorm.model';
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
  @ApiBody({ type: TestParamsDTO })
  @Post('new')
  async createTestEntity(@Body() testEntity: TestParamsDTO) {
    this.logger.log(`Post request received for TestEntity`);
    return this.typeormService.createTestEntity(testEntity);
  }
}
