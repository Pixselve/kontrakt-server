import * as TypeGraphQL from "type-graphql";
import { GroupWhereInput } from "../inputs/GroupWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupFilter {
  @TypeGraphQL.Field((_type) => GroupWhereInput, {
    nullable: true,
    description: undefined,
  })
  every?: GroupWhereInput | null | undefined;

  @TypeGraphQL.Field((_type) => GroupWhereInput, {
    nullable: true,
    description: undefined,
  })
  some?: GroupWhereInput | null | undefined;

  @TypeGraphQL.Field((_type) => GroupWhereInput, {
    nullable: true,
    description: undefined,
  })
  none?: GroupWhereInput | null | undefined;
}
