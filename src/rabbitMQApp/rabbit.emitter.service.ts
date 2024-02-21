import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RabbitEmitterService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  private readonly logger = new Logger(RabbitEmitterService.name);

  async emitMessage(message: string): Promise<string> {
    const exchange = 'direct';
    const routingKey = 'routingKey';
    const id = 'id';
    try {
      // this.logger.log(
      //   `Connection before closing: ${this.amqpConnection.connected}`,
      // );
      // await this.amqpConnection.close();
      // this.logger.log(
      //   `Connection after closing: ${this.amqpConnection.connected}`,
      // );
      //
      // await this.amqpConnection.init();
      // this.logger.log(
      //   `Connection after init: ${this.amqpConnection.connected}`,
      // );

      // this.logger.log(`configuration: ${this.amqpConnection.configuration}`);
      // this.logger.log(
      //   `keys: ${Object.keys(this.amqpConnection.configuration)}`,
      // );
      //
      // this.logger.log(`channel: ${this.amqpConnection.channel}`);
      // this.logger.log(`keys: ${Object.keys(this.amqpConnection.channel)}`);
      //
      // this.logger.log(
      //   `managedConnection: ${this.amqpConnection.managedConnection}`,
      // );
      // this.logger.log(
      //   `keys: ${Object.keys(this.amqpConnection.managedConnection)}`,
      // );

      // await this.amqpConnection.managedConnection.connectionOptions;

      await this.amqpConnection.publish(exchange, routingKey, message);
      return 'Message sent';
    } catch (error) {
      const errorMessage = `Error sending data to ${exchange} queue for ${id}. ${error}`;
      this.logger.error(errorMessage);
      return errorMessage;
    }
  }
}
