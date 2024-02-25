import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigServiceModule } from './configServiceApp/config-service.module';
import { TypeormModule } from './typeOrmApp/typeorm.module';
import { BullMQModule } from './bullApp/bull.module';
import { EventEmitterModule } from './eventEmitterApp/eventEmitter.module';
import { SseModule } from './serverSentEventsApp/sse.module';
import { RabbitModule } from './rabbitMQApp/rabbit.module';

@Module({
  imports: [
    ConfigServiceModule,
    TypeormModule,
    BullMQModule,
    EventEmitterModule,
    SseModule,
    RabbitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
