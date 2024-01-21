import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';

export function getValidationPipe(
  opts: Partial<ValidationPipeOptions> = {},
): ValidationPipe {
  return new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    // disableErrorMessages: true,
    forbidUnknownValues: true,
    ...opts,
  });
}
