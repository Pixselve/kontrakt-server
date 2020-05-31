import * as TypeGraphQL from "type-graphql";
import { MarkCreateOneWithoutSkillsToStudentsInput } from "../inputs/MarkCreateOneWithoutSkillsToStudentsInput";
import { SkillCreateOneWithoutSkillToStudentsInput } from "../inputs/SkillCreateOneWithoutSkillToStudentsInput";
import { StudentCreateOneWithoutSkillsToStudentInput } from "../inputs/StudentCreateOneWithoutSkillsToStudentInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateInput {
  @TypeGraphQL.Field((_type) => MarkCreateOneWithoutSkillsToStudentsInput, {
    nullable: false,
    description: undefined,
  })
  mark!: MarkCreateOneWithoutSkillsToStudentsInput;

  @TypeGraphQL.Field((_type) => SkillCreateOneWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined,
  })
  skill!: SkillCreateOneWithoutSkillToStudentsInput;

  @TypeGraphQL.Field((_type) => StudentCreateOneWithoutSkillsToStudentInput, {
    nullable: false,
    description: undefined,
  })
  student!: StudentCreateOneWithoutSkillsToStudentInput;
}
