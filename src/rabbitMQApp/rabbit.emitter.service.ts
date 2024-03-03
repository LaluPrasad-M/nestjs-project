import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RabbitEmitterService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  private readonly logger = new Logger(RabbitEmitterService.name);

  private async publishToAmqpWithRetry(
    exchange: string,
    routingKey: string,
    message: string,
    id: string | number,
    maxRetry: number,
    retryDelayInMilliseconds: number,
  ): Promise<void | Error> {
    try {
      await this.amqpConnection.publish(exchange, routingKey, message);
    } catch (error) {
      maxRetry--;
      if (maxRetry <= 0) {
        throw new Error(
          `Max retry limit reached for publishing to AMQP. ${error}`,
        );
      } else {
        this.logger.warn(
          `Error sending data to ${exchange} queue for ${id}. ${error}`,
        );
        this.logger.log(`Retrying... ${maxRetry} attempts left`);
        await new Promise((resolve) =>
          setTimeout(resolve, retryDelayInMilliseconds),
        );
        await this.publishToAmqpWithRetry(
          exchange,
          routingKey,
          message,
          id,
          3,
          1000,
        );
      }
    }
  }

  private async ensureAmqpConnection(
    maxRetry: number,
    retryDelayInMilliseconds: number,
  ): Promise<void> {
    try {
      if (!this.amqpConnection.connected) {
        this.logger.log('AMQP connection not initialized. Initializing now...');
        await this.amqpConnection.init();

        let retries = maxRetry;
        while (!this.amqpConnection.connected && retries > 0) {
          this.logger.log(
            `Connection not established. Retrying... ${retries}/${maxRetry} attempts left`,
          );
          await new Promise((resolve) =>
            setTimeout(resolve, retryDelayInMilliseconds),
          );
          retries--;
        }
      }
    } catch (error) {
      this.logger.log(`Error initializing AMQP connection. ${error}`);
    }
  }

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

      // check if the connection is established after 1 second for 3 times
      await this.ensureAmqpConnection(3, 1000);

      if (this.amqpConnection.connected) {
        this.logger.log(`Connection established. Sending message...`);
        await this.publishToAmqpWithRetry(
          exchange,
          routingKey,
          message,
          id,
          3,
          1000,
        );
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
