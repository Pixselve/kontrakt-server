import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillUpdateOneRequiredWithoutSkillToStudentsInput } from "../inputs/SkillUpdateOneRequiredWithoutSkillToStudentsInput";
import { StudentUpdateOneRequiredWithoutSkillsToStudentInput } from "../inputs/StudentUpdateOneRequiredWithoutSkillsToStudentInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithoutMarkDataInput {
  @TypeGraphQL.Field(_type => SkillUpdateOneRequiredWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  skill?: SkillUpdateOneRequiredWithoutSkillToStudentsInput | null | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutSkillsToStudentInput, {
    nullable: true,
    description: undefined
  })
  student?: StudentUpdateOneRequiredWithoutSkillsToStudentInput | null | undefined;
}
