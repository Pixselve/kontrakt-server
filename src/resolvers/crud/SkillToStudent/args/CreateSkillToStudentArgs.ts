import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateInput } from "../../../inputs/SkillToStudentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSkillToStudentArgs {
  @TypeGraphQL.Field((_type) => SkillToStudentCreateInput, { nullable: false })
  data!: SkillToStudentCreateInput;
}
