import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractCreateOneWithoutSkillsInput } from "../inputs/ContractCreateOneWithoutSkillsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillCreateWithoutSkillToStudentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => ContractCreateOneWithoutSkillsInput, {
    nullable: false,
    description: undefined
  })
  contract!: ContractCreateOneWithoutSkillsInput;
}
