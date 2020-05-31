import * as TypeGraphQL from "type-graphql";
import { GroupCreateWithoutContractsInput } from "../inputs/GroupCreateWithoutContractsInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupCreateManyWithoutContractsInput {
  @TypeGraphQL.Field((_type) => [GroupCreateWithoutContractsInput], {
    nullable: true,
    description: undefined,
  })
  create?: GroupCreateWithoutContractsInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [GroupWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: GroupWhereUniqueInput[] | null | undefined;
}
