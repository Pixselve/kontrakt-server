import * as TypeGraphQL from "type-graphql";
import { ColorUpdateOneRequiredWithoutSkillsStatusesInput } from "../inputs/ColorUpdateOneRequiredWithoutSkillsStatusesInput";
import { Mark }         from "../enums";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusUpdateInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  text?: string | null;

  @TypeGraphQL.Field(_type => ColorUpdateOneRequiredWithoutSkillsStatusesInput, {
    nullable: true,
    description: undefined
  })
  color?: ColorUpdateOneRequiredWithoutSkillsStatusesInput | null;
}
