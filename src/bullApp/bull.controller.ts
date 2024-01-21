import { Body, Controller, Logger, Post } from '@nestjs/common';
import { BullMQService } from './bull.service';
import { ApiBody } from '@nestjs/swagger';
import { TranscodeParamsDTO } from './bull.model';

@Controller('bullmq')
export class BullMQController {
  constructor(private readonly bullMqService: BullMQService) {}
  private readonly logger = new Logger(BullMQController.name);

  @ApiBody({ type: TranscodeParamsDTO })
  @Post()
  async transcode(@Body() job: TranscodeParamsDTO) {
    this.logger.log(`Post transcode request received for Job: ${job.jobId}`);
    return this.bullMqService.transcode(job);
  }
}
