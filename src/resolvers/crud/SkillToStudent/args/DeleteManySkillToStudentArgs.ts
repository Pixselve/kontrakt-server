import * as TypeGraphQL from "type-graphql";
import { SkillToStudentWhereInput } from "../../../inputs/SkillToStudentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySkillToStudentArgs {
  @TypeGraphQL.Field((_type) => SkillToStudentWhereInput, { nullable: true })
  where?: SkillToStudentWhereInput | null | undefined;
}
