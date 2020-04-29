import * as TypeGraphQL from "type-graphql";
import { SkillUpdateOneRequiredWithoutSkillToStudentsInput } from "../inputs/SkillUpdateOneRequiredWithoutSkillToStudentsInput";
import { Mark } from "../../enums/Mark";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithoutStudentDataInput {
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
}
