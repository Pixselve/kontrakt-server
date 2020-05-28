import * as TypeGraphQL from "type-graphql";
import { ContractCreateWithoutGroupsInput } from "../inputs/ContractCreateWithoutGroupsInput";
import { ContractWhereUniqueInput } from "../inputs/ContractWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateManyWithoutGroupsInput {
  @TypeGraphQL.Field(_type => [ContractCreateWithoutGroupsInput], {
    nullable: true,
    description: undefined
  })
  create?: ContractCreateWithoutGroupsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ContractWhereUniqueInput[] | null | undefined;
}
