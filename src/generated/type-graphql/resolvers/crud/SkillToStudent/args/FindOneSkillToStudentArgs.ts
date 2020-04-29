import * as TypeGraphQL from "type-graphql";
import { SkillToStudentWhereUniqueInput } from "../../../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneSkillToStudentArgs {
  @TypeGraphQL.Field(_type => SkillToStudentWhereUniqueInput, { nullable: false })
  where!: SkillToStudentWhereUniqueInput;
}
