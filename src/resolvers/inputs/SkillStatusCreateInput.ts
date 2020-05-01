import * as TypeGraphQL from "type-graphql";
import { ColorCreateOneWithoutSkillsStatusesInput } from "../inputs/ColorCreateOneWithoutSkillsStatusesInput";
import { Mark }         from "../enums";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusCreateInput {
  @TypeGraphQL.Field(_type => Mark, {
    nullable: false,
    description: undefined
  })
  mark!: keyof typeof Mark;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  text!: string;

  @TypeGraphQL.Field(_type => ColorCreateOneWithoutSkillsStatusesInput, {
    nullable: false,
    description: undefined
  })
  color!: ColorCreateOneWithoutSkillsStatusesInput;
}
