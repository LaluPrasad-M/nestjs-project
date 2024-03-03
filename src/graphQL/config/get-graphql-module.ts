import { GraphQLModule } from '@nestjs/graphql';
import { DynamicModule } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { DirectiveLocation, GraphQLDirective } from 'graphql';
export function getGraphQLModule(): DynamicModule {
  // return GraphQLModule.forRoot<ApolloDriverConfig>({
  //   autoSchemaFile: join(process.cwd(), 'src/graphQL/schema.gql'),
  //   sortSchema: true,
  //   driver: ApolloDriver,
  // });

  return GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphQL/schema.gql'),
    sortSchema: true,
    installSubscriptionHandlers: true,
    buildSchemaOptions: {
      directives: [
        new GraphQLDirective({
          name: 'upper',
          locations: [DirectiveLocation.FIELD_DEFINITION],
        }),
      ],
    },
  });
}
