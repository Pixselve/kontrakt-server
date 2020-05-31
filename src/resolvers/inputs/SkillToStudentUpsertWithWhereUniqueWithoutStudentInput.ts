import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateWithoutStudentInput } from "../inputs/SkillToStudentCreateWithoutStudentInput";
import { SkillToStudentUpdateWithoutStudentDataInput } from "../inputs/SkillToStudentUpdateWithoutStudentDataInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpsertWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field((_type) => SkillToStudentWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: SkillToStudentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => SkillToStudentUpdateWithoutStudentDataInput, {
    nullable: false,
    description: undefined,
  })
  update!: SkillToStudentUpdateWithoutStudentDataInput;

  @TypeGraphQL.Field((_type) => SkillToStudentCreateWithoutStudentInput, {
    nullable: false,
    description: undefined,
  })
  create!: SkillToStudentCreateWithoutStudentInput;
}
