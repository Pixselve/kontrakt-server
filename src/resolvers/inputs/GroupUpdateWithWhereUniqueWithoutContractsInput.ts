import * as TypeGraphQL from "type-graphql";
import { GroupUpdateWithoutContractsDataInput } from "../inputs/GroupUpdateWithoutContractsDataInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupUpdateWithWhereUniqueWithoutContractsInput {
  @TypeGraphQL.Field((_type) => GroupWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: GroupWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GroupUpdateWithoutContractsDataInput, {
    nullable: false,
    description: undefined,
  })
  data!: GroupUpdateWithoutContractsDataInput;
}
