import * as TypeGraphQL from "type-graphql";
import { OrderByArg }   from "../enums";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractOrderByInput {
  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  date?: keyof typeof OrderByArg | null;

  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof OrderByArg | null;
}
