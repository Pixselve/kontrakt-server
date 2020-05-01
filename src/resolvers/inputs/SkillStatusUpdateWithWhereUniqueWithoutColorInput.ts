import * as TypeGraphQL from "type-graphql";
import { SkillStatusUpdateWithoutColorDataInput } from "../inputs/SkillStatusUpdateWithoutColorDataInput";
import { SkillStatusWhereUniqueInput } from "../inputs/SkillStatusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusUpdateWithWhereUniqueWithoutColorInput {
  @TypeGraphQL.Field(_type => SkillStatusWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => SkillStatusUpdateWithoutColorDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillStatusUpdateWithoutColorDataInput;
}
