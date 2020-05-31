import * as TypeGraphQL from "type-graphql";
import { OrderByArg } from "../../enums/OrderByArg";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentOrderByInput {
  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  firstName?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  id?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  lastName?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field((_type) => OrderByArg, {
    nullable: true,
    description: undefined,
  })
  username?: keyof typeof OrderByArg | null | undefined;
}
