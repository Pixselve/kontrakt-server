import * as TypeGraphQL                                        from "type-graphql";
import { StudentUpdateOneRequiredWithoutSkillToStudentsInput } from "../inputs/StudentUpdateOneRequiredWithoutSkillToStudentsInput";
import { Mark }                                                from "../enums";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithoutSkillDataInput {
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

  @TypeGraphQL.Field(_type => StudentUpdateOneRequiredWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  student?: StudentUpdateOneRequiredWithoutSkillToStudentsInput | null;
}
