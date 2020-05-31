import * as TypeGraphQL from "type-graphql";
import { OrderByArg } from "../../enums/OrderByArg";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillOrderByInput {
  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  contractId?: keyof typeof OrderByArg | null | undefined;

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
