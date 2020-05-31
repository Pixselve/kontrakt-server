import * as TypeGraphQL from "type-graphql";
import { ContractCreateWithoutSkillsInput } from "../inputs/ContractCreateWithoutSkillsInput";
import { ContractWhereUniqueInput } from "../inputs/ContractWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateOneWithoutSkillsInput {
  @TypeGraphQL.Field((_type) => ContractCreateWithoutSkillsInput, {
    nullable: true,
    description: undefined,
  })
  create?: ContractCreateWithoutSkillsInput | null | undefined;

  @TypeGraphQL.Field((_type) => ContractWhereUniqueInput, {
    nullable: true,
    description: undefined,
  })
  connect?: ContractWhereUniqueInput | null | undefined;
}
