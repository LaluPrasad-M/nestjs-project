import { Module } from '@nestjs/common';
import { SseController } from './sse.controller';
import { SseEventsService } from './sse-events.service';
import { SseService } from './sse.service';
import { getServeStaticModule } from '../serveStaticApp/config/serve-static.module';

@Module({
  imports: [getServeStaticModule()],
  controllers: [SseController],
  providers: [SseEventsService, SseService],
  exports: [SseEventsService, SseService],
})
export class SseModule {}
