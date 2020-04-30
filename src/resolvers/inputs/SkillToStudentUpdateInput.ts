import * as TypeGraphQL                                        from "type-graphql";
import { SkillUpdateOneRequiredWithoutSkillToStudentsInput }   from "../inputs/SkillUpdateOneRequiredWithoutSkillToStudentsInput";
import { StudentUpdateOneRequiredWithoutSkillToStudentsInput } from "../inputs/StudentUpdateOneRequiredWithoutSkillToStudentsInput";
import { Mark }                                                from "../enums";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @TypeGraphQL.Field(_type => Mark, {
    nullable: true,
    description: undefined
  })
  mark?: keyof typeof Mark | null;

  @TypeGraphQL.Field(_type => SkillUpdateOneRequiredWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  skill?: SkillUpdateOneRequiredWithoutSkillToStudentsInput | null;

  @TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  student?: StudentUpdateOneRequiredWithoutSkillToStudentsInput | null;
}
