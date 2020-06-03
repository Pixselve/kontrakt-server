import * as TypeGraphQL from "type-graphql";
import { SkillToStudentWhereUniqueInput } from "../../../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSkillToStudentArgs {
  @TypeGraphQL.Field((_type) => SkillToStudentWhereUniqueInput, {
    nullable: false,
  })
  where!: SkillToStudentWhereUniqueInput;
}