import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ErrorDefinition {
  @Field({
    description: 'Name of the workflow definition',
  })
  name: string;

  @Field(() => [String], {
    description: 'Path of the error',
    nullable: true,
  })
  paths?: string[];

  @Field({
    description: 'Value of the error',
    nullable: true,
  })
  value?: string;

  @Field({
    description: 'Error description',
    nullable: true,
  })
  error?: string;
}

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

@ObjectType()
export class UserResponse {
  @Field(() => User, {
    description: 'User object',
    nullable: true,
  })
  data: User;

  @Field(() => [ErrorDefinition], {
    description: 'Error object',
  })
  errors: ErrorDefinition[];
}
