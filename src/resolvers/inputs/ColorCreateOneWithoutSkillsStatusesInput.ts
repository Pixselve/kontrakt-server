import * as TypeGraphQL from "type-graphql";
import { ColorCreateWithoutSkillsStatusesInput } from "../inputs/ColorCreateWithoutSkillsStatusesInput";
import { ColorWhereUniqueInput } from "../inputs/ColorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ColorCreateOneWithoutSkillsStatusesInput {
  @TypeGraphQL.Field(_type => ColorCreateWithoutSkillsStatusesInput, {
    nullable: true,
    description: undefined
  })
  create?: ColorCreateWithoutSkillsStatusesInput | null;

  @TypeGraphQL.Field(_type => ColorWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ColorWhereUniqueInput | null;
}
