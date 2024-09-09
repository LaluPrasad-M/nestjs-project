import { Kafka } from 'kafkajs';
import { Module } from '@nestjs/common';
import { getKafkajsModule } from './config/get-kafkajs-module';
import { KafkajsController } from './kafkajs.controller';
import { KafkajsProducerService } from './kafkajs.producer.service';
import { KafkajsConsumerService } from './kafkajs.consumer';

@Module({
  providers: [
    getKafkajsModule(),
    KafkajsProducerService,
    KafkajsConsumerService,
  ],
  controllers: [KafkajsController],
  exports: [Kafka],
})
export class KafkaModule {}
