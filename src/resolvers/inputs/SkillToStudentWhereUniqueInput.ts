import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudentIdMarkValueSkillIdCompoundUniqueInput } from "../inputs/StudentIdMarkValueSkillIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentWhereUniqueInput {
  @TypeGraphQL.Field(_type => StudentIdMarkValueSkillIdCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  studentId_markValue_skillId?: StudentIdMarkValueSkillIdCompoundUniqueInput | null | undefined;
}
