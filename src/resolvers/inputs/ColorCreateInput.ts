import * as TypeGraphQL from "type-graphql";
import { SkillStatusCreateManyWithoutColorInput } from "../inputs/SkillStatusCreateManyWithoutColorInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ColorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  rgb!: string;

  @TypeGraphQL.Field(_type => SkillStatusCreateManyWithoutColorInput, {
    nullable: true,
    description: undefined
  })
  skillsStatuses?: SkillStatusCreateManyWithoutColorInput | null;
}
