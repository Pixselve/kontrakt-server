import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MarkCreateOneWithoutSkillsToStudentsInput } from "../inputs/MarkCreateOneWithoutSkillsToStudentsInput";
import { StudentCreateOneWithoutSkillsToStudentInput } from "../inputs/StudentCreateOneWithoutSkillsToStudentInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateWithoutSkillInput {
  @TypeGraphQL.Field(_type => MarkCreateOneWithoutSkillsToStudentsInput, {
    nullable: false,
    description: undefined
  })
  mark!: MarkCreateOneWithoutSkillsToStudentsInput;

  @TypeGraphQL.Field(_type => StudentCreateOneWithoutSkillsToStudentInput, {
    nullable: false,
    description: undefined
  })
  student!: StudentCreateOneWithoutSkillsToStudentInput;
}
