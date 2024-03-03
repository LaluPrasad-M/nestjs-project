import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { GraphQLService } from './graphql.service';
import { User, UserResponse } from './graphql.type';
import { UserArgs } from './graphql.args';

@Resolver()
export class GraphQLResolver {
  constructor(private graphqlService: GraphQLService) {
    console.log('GraphQLResolver constructor');
  }
  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return this.graphqlService.findAllUsers();
  }

  @Query(() => User)
  async findUserById(@Args() userArgs: UserArgs): Promise<User> {
    return this.graphqlService.findUserById(userArgs);
  }

  @Query(() => User)
  async findUserByName(@Args('name') name: string): Promise<User> {
    return this.graphqlService.findUserByName(name);
  }

  @Mutation(() => UserResponse)
  async createUser(@Args('name') name: string): Promise<User> {
    return this.graphqlService.createUser(name);
  }
}
