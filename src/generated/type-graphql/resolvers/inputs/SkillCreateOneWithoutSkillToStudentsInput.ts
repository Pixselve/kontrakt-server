import * as TypeGraphQL from "type-graphql";
import { SkillCreateWithoutSkillToStudentsInput } from "../inputs/SkillCreateWithoutSkillToStudentsInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillCreateOneWithoutSkillToStudentsInput {
  @TypeGraphQL.Field(_type => SkillCreateWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  create?: SkillCreateWithoutSkillToStudentsInput | null;

  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: SkillWhereUniqueInput | null;
}
