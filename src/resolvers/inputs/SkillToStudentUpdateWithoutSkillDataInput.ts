import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MarkUpdateOneRequiredWithoutSkillsToStudentsInput } from "../inputs/MarkUpdateOneRequiredWithoutSkillsToStudentsInput";
import { StudentUpdateOneRequiredWithoutSkillsToStudentInput } from "../inputs/StudentUpdateOneRequiredWithoutSkillsToStudentInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithoutSkillDataInput {
  @TypeGraphQL.Field(_type => MarkUpdateOneRequiredWithoutSkillsToStudentsInput, {
    nullable: true,
    description: undefined
  })
  mark?: MarkUpdateOneRequiredWithoutSkillsToStudentsInput | null | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutSkillsToStudentInput, {
    nullable: true,
    description: undefined
  })
  student?: StudentUpdateOneRequiredWithoutSkillsToStudentInput | null | undefined;
}
