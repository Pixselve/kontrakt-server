import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { OrderByArg } from "../../enums/OrderByArg";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TeacherOrderByInput {
  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  email?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  password?: keyof typeof OrderByArg | null | undefined;
}
