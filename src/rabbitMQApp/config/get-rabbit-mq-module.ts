import {
  RabbitMQModule,
  MessageHandlerErrorBehavior,
} from '@golevelup/nestjs-rabbitmq';
// import { DynamicModule } from '@nestjs/common';

export function getRabbitMQModule(): any {
  return RabbitMQModule.forRoot(RabbitMQModule, {
    exchanges: [
      {
        name: 'direct',
        type: 'direct',
      },
      {
        name: 'exchange',
        type: 'direct',
      },
    ],
    uri: process.env.RABBITMQ_URL,
    connectionInitOptions: { wait: false },
    defaultRpcTimeout: 3000,
    // defaultRpcErrorBehavior: MessageHandlerErrorBehavior.NACK,
    defaultSubscribeErrorBehavior: MessageHandlerErrorBehavior.NACK,
    registerHandlers: process.env.DISABLE_RABBITMQ_HANDLERS !== 'true',
    prefetchCount: 10,
  });
}
