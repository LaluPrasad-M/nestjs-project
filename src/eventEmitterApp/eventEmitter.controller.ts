import { Controller, Logger, Post } from '@nestjs/common';
import { EventEmitterEmitterService } from './eventEmitter.emitter.service';

@Controller('event-emitter')
export class EventEmitterController {
  constructor(
    private readonly eventEmitterEmitterService: EventEmitterEmitterService,
  ) {}
  private readonly logger = new Logger(EventEmitterController.name);

  @Post()
  async eventEmitterEmit() {
    this.logger.log('Post eventEmitter request received');
    return this.eventEmitterEmitterService.eventEmitterEmit();
  }
}
