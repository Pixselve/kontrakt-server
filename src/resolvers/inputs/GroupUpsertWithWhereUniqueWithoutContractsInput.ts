import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GroupCreateWithoutContractsInput } from "../inputs/GroupCreateWithoutContractsInput";
import { GroupUpdateWithoutContractsDataInput } from "../inputs/GroupUpdateWithoutContractsDataInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupUpsertWithWhereUniqueWithoutContractsInput {
  @TypeGraphQL.Field(_type => GroupWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: GroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => GroupUpdateWithoutContractsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: GroupUpdateWithoutContractsDataInput;

  @TypeGraphQL.Field(_type => GroupCreateWithoutContractsInput, {
    nullable: false,
    description: undefined
  })
  create!: GroupCreateWithoutContractsInput;
}
