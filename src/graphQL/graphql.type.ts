import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({
    description: 'Unique identifier for the User',
  })
  id: string;

  @Field({
    description: 'Name of the User',
  })
  name: string;

  @Field(() => Int, {
    description: 'Age of the User',
    nullable: true,
  })
  age?: number;
}
