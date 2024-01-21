import { Module } from '@nestjs/common';
import { EventEmitterController } from './eventEmitter.controller';
import { EventEmitterEmitterService } from './eventEmitter.emitter.service';
import { EventEmitterListenerService } from './eventEmitter.listener.service';

@Module({
  imports: [],
  controllers: [EventEmitterController],
  providers: [EventEmitterEmitterService, EventEmitterListenerService],
  exports: [EventEmitterEmitterService],
})
export class EventEmitterModule {}
