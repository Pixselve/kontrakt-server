import * as TypeGraphQL from "type-graphql";
import { StudentIdSkillIdCompoundUniqueInput } from "../inputs/StudentIdSkillIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentWhereUniqueInput {
  @TypeGraphQL.Field((_type) => StudentIdSkillIdCompoundUniqueInput, {
    nullable: true,
    description: undefined,
  })
  studentId_skillId?: StudentIdSkillIdCompoundUniqueInput | null | undefined;
}
