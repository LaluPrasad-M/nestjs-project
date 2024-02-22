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
      this.logger.log(
        `Connection before closing: ${this.amqpConnection.connected}`,
      );
      await this.amqpConnection.close();
      this.logger.log(
        `Connection after closing: ${this.amqpConnection.connected}`,
      );

      if (!this.amqpConnection.connected) {
        this.logger.log(`AMQP connection not initialized. Initializing now...`);
        await this.amqpConnection.init();

        // check if the connection is established after 0.5 second for 6 times
        let retries = 6;
        while (!this.amqpConnection.connected && retries > 0) {
          this.logger.log(
            `Connection not established. Retrying... ${retries} attempts left`,
          );
          await new Promise((resolve) => setTimeout(resolve, 500));
          retries--;
        }
      }
      if (this.amqpConnection.connected) {
        this.logger.log(`Connection established. Sending message...`);
        await this.amqpConnection.publish(exchange, routingKey, message);
      } else {
        throw new Error('Connection not established. Message not sent.');
      }
      return 'Message sent';
    } catch (error) {
      const errorMessage = `Error sending data to ${exchange} queue for ${id}. ${error}`;
      this.logger.error(errorMessage);
      return errorMessage;
    }
  }
}
