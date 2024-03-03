import { Injectable } from '@nestjs/common';
import { UserArgs } from './graphql.args';
import { UserResponse } from './graphql.type';

@Injectable()
export class GraphQLService {
  async findAllUsers() {
    return [{ id: '1', name: 'John Doe' }];
  }

  async findUserById(userArgs: UserArgs) {
    return { id: userArgs.id, name: 'John Doe' };
  }

  async findUserByName(name: string) {
    return { id: '1', name };
  }

  async createUser(name: string): Promise<UserResponse> {
    return { data: { id: '1', name }, errors: [] };
  }
}
