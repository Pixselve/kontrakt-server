import * as TypeGraphQL from "type-graphql";
import { MarkCreateWithoutSkillsToStudentsInput } from "../inputs/MarkCreateWithoutSkillsToStudentsInput";
import { MarkUpdateWithoutSkillsToStudentsDataInput } from "../inputs/MarkUpdateWithoutSkillsToStudentsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkUpsertWithoutSkillsToStudentsInput {
  @TypeGraphQL.Field((_type) => MarkUpdateWithoutSkillsToStudentsDataInput, {
    nullable: false,
    description: undefined,
  })
  update!: MarkUpdateWithoutSkillsToStudentsDataInput;

  @TypeGraphQL.Field((_type) => MarkCreateWithoutSkillsToStudentsInput, {
    nullable: false,
    description: undefined,
  })
  create!: MarkCreateWithoutSkillsToStudentsInput;
}
