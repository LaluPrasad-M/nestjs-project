import { Kafka, logLevel } from 'kafkajs';
import { Provider } from '@nestjs/common';

export const kafkaClient: Kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['host.docker.internal:9092', 'localhost:9092'],
  retry: {
    retries: 5,
    initialRetryTime: 300,
    maxRetryTime: 30000,
  },
  logLevel: logLevel.ERROR,
});

export function getKafkajsModule(): Provider {
  return {
    provide: Kafka,
    useValue: kafkaClient,
  };
}
