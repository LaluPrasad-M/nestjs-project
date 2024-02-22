import { Body, Controller, Logger, Post } from '@nestjs/common';
import { EventEmitterEmitterService } from './eventEmitter.emitter.service';
import { EventEmitterParamsDTO } from './evenEmitter.model';
// import { ApiBody } from '@nestjs/swagger';

@Controller('event-emitter')
export class EventEmitterController {
  constructor(
    private readonly eventEmitterEmitterService: EventEmitterEmitterService,
  ) {}
  private readonly logger = new Logger(EventEmitterController.name);

  // @ApiBody({ type: EventEmitterParamsDTO })
  @Post()
  async eventEmitterEmit(@Body() eventEmitterParamsDTO: EventEmitterParamsDTO) {
    this.logger.log('Post eventEmitter request received');
    return this.eventEmitterEmitterService.eventEmitterEmit(
      eventEmitterParamsDTO,
    );
  }
}
