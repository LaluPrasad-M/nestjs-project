import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullMQModule } from './bullApp/bull.module';
import { getBullModule } from './bullApp/config/get-bull-module';
import { getConfigModule } from './configServiceApp/config/get-config-module';

@Module({
  imports: [getConfigModule(), getBullModule(), BullMQModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
