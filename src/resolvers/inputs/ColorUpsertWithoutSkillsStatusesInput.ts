import * as TypeGraphQL from "type-graphql";
import { ColorCreateWithoutSkillsStatusesInput } from "../inputs/ColorCreateWithoutSkillsStatusesInput";
import { ColorUpdateWithoutSkillsStatusesDataInput } from "../inputs/ColorUpdateWithoutSkillsStatusesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ColorUpsertWithoutSkillsStatusesInput {
  @TypeGraphQL.Field(_type => ColorUpdateWithoutSkillsStatusesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ColorUpdateWithoutSkillsStatusesDataInput;

  @TypeGraphQL.Field(_type => ColorCreateWithoutSkillsStatusesInput, {
    nullable: false,
    description: undefined
  })
  create!: ColorCreateWithoutSkillsStatusesInput;
}
