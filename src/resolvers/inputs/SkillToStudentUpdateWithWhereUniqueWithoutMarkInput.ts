import * as TypeGraphQL from "type-graphql";
import { SkillToStudentUpdateWithoutMarkDataInput } from "../inputs/SkillToStudentUpdateWithoutMarkDataInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithWhereUniqueWithoutMarkInput {
  @TypeGraphQL.Field((_type) => SkillToStudentWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: SkillToStudentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => SkillToStudentUpdateWithoutMarkDataInput, {
    nullable: false,
    description: undefined,
  })
  data!: SkillToStudentUpdateWithoutMarkDataInput;
}
