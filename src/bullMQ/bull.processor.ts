import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { BullEvents, TRANSCODE_QUEUE } from 'src/bullMQ/lib/constants';

@Processor(TRANSCODE_QUEUE)
export class BullMQProcessor {
  private readonly logger = new Logger(BullMQProcessor.name);

  @Process({
    name: BullEvents.CONVERT_TO_MP4,
  })
  async transcode(job: Job<unknown>) {
    this.logger.log(`Processing ${TRANSCODE_QUEUE} Queue element`);
    this.logger.debug('Queue Data: ', job.data);
  }
}
