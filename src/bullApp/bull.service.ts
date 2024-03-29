import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { TRANSCODE_QUEUE, BullEvents } from './lib/constants';
import { TranscodeParamsDTO } from './bull.model';

@Injectable()
export class BullMQService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE)
    private readonly transcodeQueue: Queue,
  ) {}
  private readonly logger = new Logger(BullMQService.name);

  // This is a Bull MQ Producer
  async transcode(job: TranscodeParamsDTO) {
    try {
      this.logger.log(`Received Job ${job.jobId} to ${TRANSCODE_QUEUE} Queue`);

      const existingJob = await this.transcodeQueue.getJob(job.jobId);
      if (existingJob) {
        this.logger.warn(
          `Job ${job.jobId} already exists in ${TRANSCODE_QUEUE} Queue`,
        );
        try {
          await existingJob?.remove();
        } catch (error) {
          throw new Error(
            `Job ${job.jobId} is still in progress in ${TRANSCODE_QUEUE} Queue. ${error}`,
          );
        }
      }

      this.logger.log(`Adding to ${TRANSCODE_QUEUE} Queue`);
      await this.transcodeQueue.add(
        BullEvents.CONVERT_TO_MP4,
        {
          filename: './filename.mp3',
        },
        {
          jobId: job.jobId,
        },
      );

      this.logger.log(`Successfully Added to ${TRANSCODE_QUEUE} Queue`);
    } catch (e) {
      this.logger.error(`${e}`);
    }
  }
}
