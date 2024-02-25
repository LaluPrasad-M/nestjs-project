import { Module } from '@nestjs/common';
import { getConfigModule } from './config/get-config-module';

@Module({
  imports: [getConfigModule()],
})
export class ConfigServiceModule {}
