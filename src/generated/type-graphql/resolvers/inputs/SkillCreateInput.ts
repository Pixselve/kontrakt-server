import * as TypeGraphQL from "type-graphql";
import { ContractCreateOneWithoutSkillsInput } from "../inputs/ContractCreateOneWithoutSkillsInput";
import { SkillToStudentCreateManyWithoutSkillInput } from "../inputs/SkillToStudentCreateManyWithoutSkillInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => SkillToStudentCreateManyWithoutSkillInput, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentCreateManyWithoutSkillInput | null;

  @TypeGraphQL.Field(_type => ContractCreateOneWithoutSkillsInput, {
    nullable: false,
    description: undefined
  })
  contract!: ContractCreateOneWithoutSkillsInput;
}
