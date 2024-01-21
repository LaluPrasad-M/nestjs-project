import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { getBullModule } from './bullApp/config/get-bull-module';
import { getConfigModule } from './configServiceApp/config/get-config-module';
import { getEventEmitterModule } from './eventEmitterApp/config/get-event-emitter-module';
import { BullMQModule } from './bullApp/bull.module';
import { EventEmitterModule } from './eventEmitterApp/eventEmitter.module';
import { getTypeORMModule } from './typeOrmApp/config/get-typeORM-module';

@Module({
  imports: [
    getConfigModule(),
    getBullModule(),
    getEventEmitterModule(),
    getTypeORMModule(),
    BullMQModule,
    EventEmitterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
