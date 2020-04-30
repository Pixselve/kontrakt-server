import * as TypeGraphQL from "type-graphql";
import { OrderByArg }   from "../enums";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentOrderByInput {
  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  firstName?: keyof typeof OrderByArg | null;

  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof OrderByArg | null;

  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  lastName?: keyof typeof OrderByArg | null;
}
