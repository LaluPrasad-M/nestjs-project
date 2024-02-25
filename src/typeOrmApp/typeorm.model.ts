import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TestParamsDTO {
  @ApiProperty({
    description: 'User name',
    required: true,
    example: 'user-name',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    description: 'Description of the user',
    required: false,
    example: 'Some description',
  })
  @IsString()
  description?: string;
}
