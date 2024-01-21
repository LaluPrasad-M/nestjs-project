import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Events } from './lib/constants';
import { TriggerLibrary } from './lib/constants';

@Injectable()
export class EventEmitterListenerService {
  private readonly logger = new Logger(EventEmitterListenerService.name);

  @OnEvent(Events.MESSAGE_EVENT)
  async eventEmitterListener(event: TriggerLibrary, message: unknown) {
    this.logger.log(
      `Received Event ${Events.MESSAGE_EVENT} for trigger ${event} got ${message}`,
    );
    await new Promise<void>((resolve) => setTimeout(resolve, 5000));
    this.logger.log(`Listening Complete for ${message}`);
  }
}
