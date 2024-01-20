import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setSwaggerSetup } from './swaggerApp/config/set-swagger-setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setSwaggerSetup(app);

  await app.listen(3000);
}
bootstrap();
