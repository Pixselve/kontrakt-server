import * as TypeGraphQL from "type-graphql";
import { OrderByArg } from "../../enums/OrderByArg";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupOrderByInput {
  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  id?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  name?: keyof typeof OrderByArg | null | undefined;
}
