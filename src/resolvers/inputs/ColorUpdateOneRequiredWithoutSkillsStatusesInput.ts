import * as TypeGraphQL from "type-graphql";
import { ColorCreateWithoutSkillsStatusesInput } from "../inputs/ColorCreateWithoutSkillsStatusesInput";
import { ColorUpdateWithoutSkillsStatusesDataInput } from "../inputs/ColorUpdateWithoutSkillsStatusesDataInput";
import { ColorUpsertWithoutSkillsStatusesInput } from "../inputs/ColorUpsertWithoutSkillsStatusesInput";
import { ColorWhereUniqueInput } from "../inputs/ColorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ColorUpdateOneRequiredWithoutSkillsStatusesInput {
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

  @TypeGraphQL.Field(_type => ColorUpdateWithoutSkillsStatusesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ColorUpdateWithoutSkillsStatusesDataInput | null;

  @TypeGraphQL.Field(_type => ColorUpsertWithoutSkillsStatusesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ColorUpsertWithoutSkillsStatusesInput | null;
}
