import { DynamicModule } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

export function getEventEmitterModule(): DynamicModule {
  return EventEmitterModule.forRoot();
}
