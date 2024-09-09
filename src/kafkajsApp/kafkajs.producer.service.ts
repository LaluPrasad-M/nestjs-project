import { kafkaClient } from './config/get-kafkajs-module';
import { Injectable, Logger } from '@nestjs/common';
import { Consumer, Producer } from 'kafkajs';

const producer: Producer = kafkaClient.producer({
  allowAutoTopicCreation: true,
});

@Injectable()
export class KafkajsProducerService {
  private readonly logger = new Logger(KafkajsProducerService.name);

  async produceKafkaEvent(message: string) {
    try {
      await this.connectWithRetry(producer);
      await producer.send({
        topic: 'test-topic',
        messages: [{ value: message }],
      });

      await new Promise((resolve) => setTimeout(resolve, 5000));
      await producer.disconnect();
      return { message: 'Message sent successfully' };
    } catch (error) {
      this.logger.error('An error occurred', error);
      throw error;
    }
  }

  private async connectWithRetry(
    client: Producer | Consumer,
    retries = 5,
    delay = 1000,
  ) {
    for (let i = 0; i < retries; i++) {
      try {
        await client.connect();
        this.logger.log('Producer Connected to Kafka');
        return;
      } catch (error) {
        this.logger.error(`Connection attempt ${i + 1} failed`, error);
        if (i < retries - 1) {
          await new Promise((res) => setTimeout(res, delay));
        } else {
          throw error;
        }
      }
    }
  }
}
