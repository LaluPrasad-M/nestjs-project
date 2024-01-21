import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TriggerLibrary } from './lib/constants';

export class EventEmitterParamsDTO {
  @ApiProperty({
    description: 'Trigger type for the Event Emitter',
    required: true,
    example: TriggerLibrary.MESSAGE_CREATED,
    type: TriggerLibrary,
    enum: TriggerLibrary,
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(TriggerLibrary)
  type: TriggerLibrary;

  @ApiProperty({
    description: 'Message emitted from emitter to listener',
    required: true,
    example: 'Message was created Successfully',
  })
  @IsNotEmpty()
  message: unknown;
}
