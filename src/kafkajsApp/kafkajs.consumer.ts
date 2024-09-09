import { kafkaClient } from './config/get-kafkajs-module';
import { Injectable, Logger } from '@nestjs/common';
import { Consumer } from 'kafkajs';

const consumer: Consumer = kafkaClient.consumer({
  groupId: 'test-group',
  allowAutoTopicCreation: true,
});

@Injectable()
export class KafkajsConsumerService {
  private readonly logger = new Logger(KafkajsConsumerService.name);

  constructor() {
    this.consumeKafkaEvent();
  }

  async consumeKafkaEvent() {
    try {
      await this.connectWithRetry(consumer);
      await consumer.subscribe({ topic: 'test-topic' });

      await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          this.logger.log(
            `topic: ${topic}, partition: ${partition}, message: ${message.value.toString()}`,
          );
        },
      });
    } catch (error) {
      this.logger.error('An error occurred while consuming messages', error);
      throw error;
    }
  }

  private async connectWithRetry(client: Consumer, retries = 5, delay = 1000) {
    for (let i = 0; i < retries; i++) {
      try {
        await client.connect();
        this.logger.log('Consumer Connected to Kafka');
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