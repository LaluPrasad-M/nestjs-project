import { Controller, Logger, Post } from '@nestjs/common';
import { BullMQService } from './bull.service';

@Controller('bullmq')
export class BullMQController {
  constructor(private readonly bullMqService: BullMQService) {}
  private readonly logger = new Logger(BullMQController.name);

  @Post()
  async transcode() {
    this.logger.log('Post transcode request received');
    return this.bullMqService.transcode();
  }
}
