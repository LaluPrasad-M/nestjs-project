import { Module } from '@nestjs/common';
import { RabbitController } from './rabbit.controller';
import { RabbitEmitterService } from './rabbit.emitter.service';
import { RabbitListenerService } from './rabbit.listener.service';
// import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { getRabbitMQModule } from './config/get-rabbit-mq-module';

@Module({
  imports: [getRabbitMQModule()],
  controllers: [RabbitController],
  providers: [RabbitEmitterService, RabbitListenerService],
  exports: [RabbitEmitterService],
})
export class RabbitModule {}
