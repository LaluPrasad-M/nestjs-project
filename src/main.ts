import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setSwaggerSetup } from './swaggerApp/config/set-swagger-setup';
import { getValidationPipe } from './globalConfig/get-validation-pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation using the ValidationPipe
  app.useGlobalPipes(getValidationPipe());

  // Setup Swagger API Documentation
  setSwaggerSetup(app);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
