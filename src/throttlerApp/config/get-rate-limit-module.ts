import { DynamicModule } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

export function getRateLimitModule(): DynamicModule {
  return ThrottlerModule.forRoot([
    {
      ttl: 60000,
      limit: 1,
    },
  ]);
}
