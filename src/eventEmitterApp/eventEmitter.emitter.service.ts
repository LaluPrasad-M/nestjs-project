import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Events } from './lib/constants';
import { EventEmitterParamsDTO } from './evenEmitter.model';

@Injectable()
export class EventEmitterEmitterService {
  constructor(private eventEmitter: EventEmitter2) {}

  private readonly logger = new Logger(EventEmitterEmitterService.name);

  async eventEmitterEmit(eventEmitterParamsDTO: EventEmitterParamsDTO) {
    this.logger.log(
      `Received eventEmitter Request for event: ${Events.MESSAGE_EVENT}, type: ${eventEmitterParamsDTO.type}`,
    );
    this.eventEmitter.emit(
      Events.MESSAGE_EVENT,
      eventEmitterParamsDTO.type,
      eventEmitterParamsDTO.message,
    );
  }
}
