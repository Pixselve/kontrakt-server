import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateWithoutMarkInput } from "../inputs/SkillToStudentCreateWithoutMarkInput";
import { SkillToStudentUpdateWithoutMarkDataInput } from "../inputs/SkillToStudentUpdateWithoutMarkDataInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpsertWithWhereUniqueWithoutMarkInput {
  @TypeGraphQL.Field((_type) => SkillToStudentWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: SkillToStudentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => SkillToStudentUpdateWithoutMarkDataInput, {
    nullable: false,
    description: undefined,
  })
  update!: SkillToStudentUpdateWithoutMarkDataInput;

  @TypeGraphQL.Field((_type) => SkillToStudentCreateWithoutMarkInput, {
    nullable: false,
    description: undefined,
  })
  create!: SkillToStudentCreateWithoutMarkInput;
}
