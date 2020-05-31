import * as TypeGraphQL from "type-graphql";
import { SkillCreateWithoutSkillToStudentsInput } from "../inputs/SkillCreateWithoutSkillToStudentsInput";
import { SkillUpdateWithoutSkillToStudentsDataInput } from "../inputs/SkillUpdateWithoutSkillToStudentsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpsertWithoutSkillToStudentsInput {
  @TypeGraphQL.Field((_type) => SkillUpdateWithoutSkillToStudentsDataInput, {
    nullable: false,
    description: undefined,
  })
  update!: SkillUpdateWithoutSkillToStudentsDataInput;

  @TypeGraphQL.Field((_type) => SkillCreateWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined,
  })
  create!: SkillCreateWithoutSkillToStudentsInput;
}
