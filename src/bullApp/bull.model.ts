import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class transcodeParamsDTO {
  @ApiProperty({
    description: 'Job ID for the Bull Queue',
    required: true,
    example: '12345',
    minLength: 5,
    maxLength: 10,
  })
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(10)
  @IsString()
  jobId: string;
}
