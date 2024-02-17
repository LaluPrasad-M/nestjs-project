import { ServeStaticModule } from '@nestjs/serve-static';
import { DynamicModule } from '@nestjs/common';
import { join } from 'path';
export function getServeStaticModule(): DynamicModule {
  return ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '..', '..', 'client'),
  });
}
