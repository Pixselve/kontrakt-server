import * as TypeGraphQL from "type-graphql";
import { SkillStatusCreateWithoutColorInput } from "../inputs/SkillStatusCreateWithoutColorInput";
import { SkillStatusWhereUniqueInput } from "../inputs/SkillStatusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusCreateManyWithoutColorInput {
  @TypeGraphQL.Field(_type => [SkillStatusCreateWithoutColorInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillStatusCreateWithoutColorInput[] | null;

  @TypeGraphQL.Field(_type => [SkillStatusWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillStatusWhereUniqueInput[] | null;
}
