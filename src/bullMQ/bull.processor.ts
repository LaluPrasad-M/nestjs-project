import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { TRANSCODE_QUEUE } from 'src/bullMQ/lib/constants/bullMQ';

@Processor(TRANSCODE_QUEUE)
export class BullMQProcessor {
  private readonly logger = new Logger(BullMQProcessor.name);

  @Process()
  async tanscode(job: Job<unknown>) {
    this.logger.log(`Processing ${TRANSCODE_QUEUE} Queue element`);
    this.logger.log(JSON.stringify(job));
  }
}
