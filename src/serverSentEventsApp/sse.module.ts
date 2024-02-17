import { Module } from '@nestjs/common';
import { SseController } from './sse.controller';
import { SseEventsService } from './sse-events.service';
import { SseService } from './sse.service';

@Module({
  controllers: [SseController],
  providers: [SseEventsService, SseService],
  exports: [SseEventsService, SseService],
})
export class SseModule {}
