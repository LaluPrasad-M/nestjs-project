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
    this.logger.debug(`JOB Data: ${JSON.stringify(job)}`);
    this.logger.debug(`Queue Data: ${JSON.stringify(job.data)}`);
    await new Promise<void>((resolve) => setTimeout(resolve, 5000));
    this.logger.log(`Completed the Job: ${job.id}`);
  }
}
