import { BullModule } from '@nestjs/bull';
import { DynamicModule } from '@nestjs/common';

export function getBullModule(): DynamicModule {
  return BullModule.forRoot({
    url: process.env.REDIS_URL,
    limiter: {
      max: 24,
      duration: 3000,
    },
  });
}
