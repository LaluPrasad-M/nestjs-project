import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Events } from './lib/constants';

@Injectable()
export class EventEmitterListenerService {
  private readonly logger = new Logger(EventEmitterListenerService.name);

  @OnEvent(Events.MY_EVENT)
  async eventEmitterListener() {
    const timestamp = new Date().valueOf();
    this.logger.log(
      `Received eventEmitter for event ${Events.MY_EVENT}, got ${timestamp}`,
    );
    await new Promise<void>((resolve) => setTimeout(resolve, 5000));
    this.logger.log(`Listening Complete for ${timestamp}`);
  }
}
