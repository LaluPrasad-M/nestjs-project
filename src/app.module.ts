import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { getBullModule } from './bullApp/config/get-bull-module';
import { getConfigModule } from './configServiceApp/config/get-config-module';
import { getEventEmitterModule } from './eventEmitterApp/config/get-event-emitter-module';
import { BullMQModule } from './bullApp/bull.module';
import { EventEmitterModule } from './eventEmitterApp/eventEmitter.module';
import { getTypeORMModule } from './typeOrmApp/config/get-typeORM-module';
import { SseModule } from './serverSentEventsApp/sse.module';
import { getServeStaticModule } from './serveStaticApp/config/serve-static.module';
import { RabbitModule } from './rabbitMQApp/rabbit.module';

@Module({
  imports: [
    getConfigModule(),
    getBullModule(),
    getEventEmitterModule(),
    getTypeORMModule(),
    getServeStaticModule(),
    BullMQModule,
    EventEmitterModule,
    SseModule,
    RabbitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
