import * as TypeGraphQL from "type-graphql";
import { SkillStatusCreateWithoutColorInput } from "../inputs/SkillStatusCreateWithoutColorInput";
import { SkillStatusUpdateWithoutColorDataInput } from "../inputs/SkillStatusUpdateWithoutColorDataInput";
import { SkillStatusWhereUniqueInput } from "../inputs/SkillStatusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusUpsertWithWhereUniqueWithoutColorInput {
  @TypeGraphQL.Field(_type => SkillStatusWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => SkillStatusUpdateWithoutColorDataInput, {
    nullable: false,
    description: undefined
  })
  update!: SkillStatusUpdateWithoutColorDataInput;

  @TypeGraphQL.Field(_type => SkillStatusCreateWithoutColorInput, {
    nullable: false,
    description: undefined
  })
  create!: SkillStatusCreateWithoutColorInput;
}
