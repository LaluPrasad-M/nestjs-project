import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueStalled,
  OnQueueError,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { BullEvents, TRANSCODE_QUEUE } from './lib/constants';

export type TriggerQueueEvent = {
  trigger: BullEvents | null;
  message: unknown;
};

@Processor(TRANSCODE_QUEUE)
export class BullMQProcessor {
  private readonly logger = new Logger(BullMQProcessor.name);

  @OnQueueActive()
  onActive(job: Job<TriggerQueueEvent>): void {
    this.logger.log('Queue processing job', {
      extra: { job },
    });
  }

  @OnQueueCompleted()
  @OnQueueStalled()
  async onComplete(job: Job<TriggerQueueEvent>): Promise<void> {
    this.logger.log('Queue processing job complete', {
      extra: { job },
    });
  }

  @OnQueueError()
  async onError(job: Job<TriggerQueueEvent>, error: Error): Promise<void> {
    this.logger.log('Queue processing job error', {
      extra: { job },
      error,
    });
  }

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
