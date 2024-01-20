import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullMQModule } from './bullMQ/bull.module';
import { getBullModule } from './bullMQ/Configs/get-bull-module';

@Module({
  imports: [getBullModule(), BullMQModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
