import * as TypeGraphQL from "type-graphql";
import { ContractCreateWithoutSkillsInput } from "../inputs/ContractCreateWithoutSkillsInput";
import { ContractUpdateWithoutSkillsDataInput } from "../inputs/ContractUpdateWithoutSkillsDataInput";
import { ContractUpsertWithoutSkillsInput } from "../inputs/ContractUpsertWithoutSkillsInput";
import { ContractWhereUniqueInput } from "../inputs/ContractWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateOneRequiredWithoutSkillsInput {
  @TypeGraphQL.Field(_type => ContractCreateWithoutSkillsInput, {
    nullable: true,
    description: undefined
  })
  create?: ContractCreateWithoutSkillsInput | null;

  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ContractWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => ContractUpdateWithoutSkillsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ContractUpdateWithoutSkillsDataInput | null;

  @TypeGraphQL.Field(_type => ContractUpsertWithoutSkillsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ContractUpsertWithoutSkillsInput | null;
}
