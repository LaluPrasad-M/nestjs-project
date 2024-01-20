import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from 'src/bullMQ/lib/constants';
import { BullMQController } from './bull.controller';
import { BullMQService } from './bull.service';
import { BullMQProcessor } from './bull.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: TRANSCODE_QUEUE,
    }),
  ],
  controllers: [BullMQController],
  providers: [BullMQProcessor, BullMQService],
  exports: [BullMQService],
})
export class BullMQModule {}
