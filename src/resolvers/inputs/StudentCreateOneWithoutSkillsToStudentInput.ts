import * as TypeGraphQL from "type-graphql";
import { StudentCreateWithoutSkillsToStudentInput } from "../inputs/StudentCreateWithoutSkillsToStudentInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentCreateOneWithoutSkillsToStudentInput {
  @TypeGraphQL.Field((_type) => StudentCreateWithoutSkillsToStudentInput, {
    nullable: true,
    description: undefined,
  })
  create?: StudentCreateWithoutSkillsToStudentInput | null | undefined;

  @TypeGraphQL.Field((_type) => StudentWhereUniqueInput, {
    nullable: true,
    description: undefined,
  })
  connect?: StudentWhereUniqueInput | null | undefined;
}
