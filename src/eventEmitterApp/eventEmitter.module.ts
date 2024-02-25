import { Module } from '@nestjs/common';
import { EventEmitterController } from './eventEmitter.controller';
import { EventEmitterEmitterService } from './eventEmitter.emitter.service';
import { EventEmitterListenerService } from './eventEmitter.listener.service';
import { getEventEmitterModule } from './config/get-event-emitter-module';

@Module({
  imports: [getEventEmitterModule()],
  controllers: [EventEmitterController],
  providers: [EventEmitterEmitterService, EventEmitterListenerService],
  exports: [EventEmitterEmitterService],
})
export class EventEmitterModule {}
