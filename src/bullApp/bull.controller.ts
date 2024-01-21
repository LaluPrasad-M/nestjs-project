import { Body, Controller, Logger, Post } from '@nestjs/common';
import { BullMQService } from './bull.service';
import { ApiBody } from '@nestjs/swagger';
import { transcodeParamsDTO } from './bull.model';

@Controller('bullmq')
export class BullMQController {
  constructor(private readonly bullMqService: BullMQService) {}
  private readonly logger = new Logger(BullMQController.name);

  @ApiBody({ type: transcodeParamsDTO })
  @Post()
  async transcode(@Body() job: transcodeParamsDTO) {
    this.logger.log(`Post transcode request received for Job: ${job}`);
    return this.bullMqService.transcode(job);
  }
}
