import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RabbitListenerService {
  constructor() {}
  private readonly logger = new Logger(RabbitListenerService.name);

  @RabbitSubscribe({
    exchange: 'direct',
    routingKey: 'routingKey',
    queue: 'queue',
  })
  public async carePlanToCloseNotification(message: string): Promise<void> {
    this.logger.log(`Received message: ${message}`);
  }
}
