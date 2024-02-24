import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setSwaggerSetup(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Nest JS App')
    .setDescription(
      'Service for Learning and Understanding all the nestjs packages and its implementations',
    )
    .setVersion('1.0')
    .addTag('nestjs-app')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      controllerKey + '_' + methodKey,
    deepScanRoutes: true,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
}

/*
Swagger Api Description:
  Sample:
  @ApiOkResponse({
    description: 'Default Get API created by nestjs App',
  })

  use ApiOkResponse, ApiCreatedResponse, etc Based on the required status code

Swagger Property Description:
  Sample:
   @ApiProperty({
    description: 'Any String Response',
    required: false,
    nullable: true,
    example: 'Hello World!',
  })

  @ApiBody({ type: StringDTO })

  Use @ApiProperty to set the Parameters Description and other options,
  but do not forget to add @ApiBody just above the @Get/@Post of the API so that the swagger recognises the @ApiProperty

 */
