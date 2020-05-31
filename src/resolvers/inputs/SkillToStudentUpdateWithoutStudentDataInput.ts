import * as TypeGraphQL from "type-graphql";
import { MarkUpdateOneRequiredWithoutSkillsToStudentsInput } from "../inputs/MarkUpdateOneRequiredWithoutSkillsToStudentsInput";
import { SkillUpdateOneRequiredWithoutSkillToStudentsInput } from "../inputs/SkillUpdateOneRequiredWithoutSkillToStudentsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithoutStudentDataInput {
  @TypeGraphQL.Field(
    (_type) => MarkUpdateOneRequiredWithoutSkillsToStudentsInput,
    {
      nullable: true,
      description: undefined,
    }
  )
  mark?: MarkUpdateOneRequiredWithoutSkillsToStudentsInput | null | undefined;

  @TypeGraphQL.Field(
    (_type) => SkillUpdateOneRequiredWithoutSkillToStudentsInput,
    {
      nullable: true,
      description: undefined,
    }
  )
  skill?: SkillUpdateOneRequiredWithoutSkillToStudentsInput | null | undefined;
}
