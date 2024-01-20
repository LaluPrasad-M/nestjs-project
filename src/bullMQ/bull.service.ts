import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { TRANSCODE_QUEUE } from 'src/bullMQ/lib/constants/bullMQ';

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
    await this.transcodeQueue.add({
      filename: './filename.mp3',
    });
    this.logger.log(`Successfully Added to ${TRANSCODE_QUEUE} Queue`);
  }
}
