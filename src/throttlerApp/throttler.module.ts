import { Module } from '@nestjs/common';
import { getRateLimitModule } from './config/get-rate-limit-module';

@Module({
  imports: [getRateLimitModule()],
})
export class ThrottlerModule {}
