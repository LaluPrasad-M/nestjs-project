import { ConfigModule } from '@nestjs/config';
import { DynamicModule } from '@nestjs/common';

export function getConfigModule(): DynamicModule {
  return ConfigModule.forRoot({
    isGlobal: true,
    // envFilePath: ['.env'],
    // validationSchema: configSchema,
    validationOptions: {
      allowUnknown: true,
      abortEarly: true,
    },
  });
}
