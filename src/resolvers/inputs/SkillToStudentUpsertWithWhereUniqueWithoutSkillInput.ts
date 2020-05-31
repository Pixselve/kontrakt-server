import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateWithoutSkillInput } from "../inputs/SkillToStudentCreateWithoutSkillInput";
import { SkillToStudentUpdateWithoutSkillDataInput } from "../inputs/SkillToStudentUpdateWithoutSkillDataInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpsertWithWhereUniqueWithoutSkillInput {
  @TypeGraphQL.Field((_type) => SkillToStudentWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: SkillToStudentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => SkillToStudentUpdateWithoutSkillDataInput, {
    nullable: false,
    description: undefined,
  })
  update!: SkillToStudentUpdateWithoutSkillDataInput;

  @TypeGraphQL.Field((_type) => SkillToStudentCreateWithoutSkillInput, {
    nullable: false,
    description: undefined,
  })
  create!: SkillToStudentCreateWithoutSkillInput;
}
