import * as TypeGraphQL from "type-graphql";
import { OrderByArg } from "../../enums/OrderByArg";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkOrderByInput {
  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  rgb?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  text?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  value?: keyof typeof OrderByArg | null | undefined;
}
