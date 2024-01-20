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

// Replace the above synchronous Code with the Below Code to make it Async

/*
import { BullModule } from '@nestjs/bull';
import { DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

export function getBullModule(): DynamicModule {
  return BullModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      redis: {
        host: configService.get<string>('REDIS_HOST', 'localhost'),
        port: configService.get<number>('REDIS_PORT', 6379),
        password: configService.get<string>('REDIS_PASSWORD', ''),
      },
      limiter: {
        max: configService.get<number>('BULL_LIMITER_MAX', 24),
        duration: configService.get<number>('BULL_LIMITER_DURATION', 3000),
      },
    }),
  });
}
 */
