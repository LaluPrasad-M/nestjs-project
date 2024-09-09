import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigServiceModule } from './configServiceApp/config-service.module';
import { TypeormModule } from './typeOrmApp/typeorm.module';
import { BullMQModule } from './bullApp/bull.module';
import { EventEmitterModule } from './eventEmitterApp/eventEmitter.module';
import { SseModule } from './serverSentEventsApp/sse.module';
import { RabbitModule } from './rabbitMQApp/rabbit.module';
import { ThrottlerModule } from './throttlerApp/throttler.module';
import { GraphQLModule } from './graphQL/graphql.module';
import { KafkaModule } from './kafkajsApp/kafkajs.module';

@Module({
  imports: [
    ConfigServiceModule,
    ThrottlerModule,
    GraphQLModule,
    TypeormModule,
    BullMQModule,
    EventEmitterModule,
    SseModule,
    RabbitModule,
    KafkaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
