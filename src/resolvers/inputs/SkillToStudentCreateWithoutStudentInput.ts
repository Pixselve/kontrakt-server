import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MarkCreateOneWithoutSkillsToStudentsInput } from "../inputs/MarkCreateOneWithoutSkillsToStudentsInput";
import { SkillCreateOneWithoutSkillToStudentsInput } from "../inputs/SkillCreateOneWithoutSkillToStudentsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateWithoutStudentInput {
  @TypeGraphQL.Field(_type => MarkCreateOneWithoutSkillsToStudentsInput, {
    nullable: false,
    description: undefined
  })
  mark!: MarkCreateOneWithoutSkillsToStudentsInput;

  @TypeGraphQL.Field(_type => SkillCreateOneWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined
  })
  skill!: SkillCreateOneWithoutSkillToStudentsInput;
}
