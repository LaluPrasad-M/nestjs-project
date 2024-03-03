import { Module } from '@nestjs/common';
import { getGraphQLModule } from './config/get-graphql-module';
import { GraphQLResolver } from './graphql.resolver';
import { GraphQLService } from './graphql.service';

@Module({
  imports: [getGraphQLModule()],
  providers: [GraphQLResolver, GraphQLService],
  exports: [GraphQLService],
})
export class GraphQLModule {}
