import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class UserArgs {
  @Field({
    description: 'Unique identifier for the User',
  })
  @IsString()
  @IsNotEmpty()
  id: string;
}
