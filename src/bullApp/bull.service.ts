import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { TRANSCODE_QUEUE, BullEvents } from 'src/bullApp/lib/constants';

@Injectable()
export class BullMQService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE)
    private readonly transcodeQueue: Queue,
  ) {}
  private readonly logger = new Logger(BullMQService.name);

  // This is a Bull MQ Producer
  async transcode() {
    this.logger.log(`Adding to ${TRANSCODE_QUEUE} Queue`);
    await this.transcodeQueue.add(
      BullEvents.CONVERT_TO_MP4,
      {
        filename: './filename.mp3',
      },
      {
        jobId: new Date().valueOf(),
      },
    );
    this.logger.log(`Successfully Added to ${TRANSCODE_QUEUE} Queue`);
  }
}
