import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './lib/constants';
import { BullMQController } from './bull.controller';
import { BullMQService } from './bull.service';
import { BullMQProcessor } from './bull.processor';
import { getBullModule } from './config/get-bull-module';

@Module({
  imports: [
    getBullModule(),
    BullModule.registerQueue({
      name: TRANSCODE_QUEUE,
    }),
  ],
  controllers: [BullMQController],
  providers: [BullMQProcessor, BullMQService],
  exports: [BullMQService],
})
export class BullMQModule {}
