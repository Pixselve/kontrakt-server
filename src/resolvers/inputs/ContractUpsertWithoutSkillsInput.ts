import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractCreateWithoutSkillsInput } from "../inputs/ContractCreateWithoutSkillsInput";
import { ContractUpdateWithoutSkillsDataInput } from "../inputs/ContractUpdateWithoutSkillsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpsertWithoutSkillsInput {
  @TypeGraphQL.Field(_type => ContractUpdateWithoutSkillsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ContractUpdateWithoutSkillsDataInput;

  @TypeGraphQL.Field(_type => ContractCreateWithoutSkillsInput, {
    nullable: false,
    description: undefined
  })
  create!: ContractCreateWithoutSkillsInput;
}
