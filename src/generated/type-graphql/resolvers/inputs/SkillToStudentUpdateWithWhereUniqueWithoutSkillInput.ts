import * as TypeGraphQL from "type-graphql";
import { SkillToStudentUpdateWithoutSkillDataInput } from "../inputs/SkillToStudentUpdateWithoutSkillDataInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithWhereUniqueWithoutSkillInput {
  @TypeGraphQL.Field(_type => SkillToStudentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillToStudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SkillToStudentUpdateWithoutSkillDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillToStudentUpdateWithoutSkillDataInput;
}
