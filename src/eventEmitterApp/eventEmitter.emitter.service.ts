import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Events } from './lib/constants';

@Injectable()
export class EventEmitterEmitterService {
  constructor(private eventEmitter: EventEmitter2) {}

  private readonly logger = new Logger(EventEmitterEmitterService.name);

  async eventEmitterEmit() {
    this.logger.log(
      `Received eventEmitter Request for event ${Events.MY_EVENT}`,
    );
    this.eventEmitter.emit(Events.MY_EVENT);
  }
}
