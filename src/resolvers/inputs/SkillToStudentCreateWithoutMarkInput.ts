import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillCreateOneWithoutSkillToStudentsInput } from "../inputs/SkillCreateOneWithoutSkillToStudentsInput";
import { StudentCreateOneWithoutSkillsToStudentInput } from "../inputs/StudentCreateOneWithoutSkillsToStudentInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateWithoutMarkInput {
  @TypeGraphQL.Field(_type => SkillCreateOneWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined
  })
  skill!: SkillCreateOneWithoutSkillToStudentsInput;

  @TypeGraphQL.Field(_type => StudentCreateOneWithoutSkillsToStudentInput, {
    nullable: false,
    description: undefined
  })
  student!: StudentCreateOneWithoutSkillsToStudentInput;
}
