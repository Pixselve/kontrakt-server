import * as TypeGraphQL from "type-graphql";
import { SkillStatusUpdateManyWithoutColorInput } from "../inputs/SkillStatusUpdateManyWithoutColorInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ColorUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  rgb?: string | null;

  @TypeGraphQL.Field(_type => SkillStatusUpdateManyWithoutColorInput, {
    nullable: true,
    description: undefined
  })
  skillsStatuses?: SkillStatusUpdateManyWithoutColorInput | null;
}
