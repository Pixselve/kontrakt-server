import * as TypeGraphQL from "type-graphql";
import { SkillToStudentCreateInput } from "../../../inputs/SkillToStudentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSkillToStudentArgs {
  @TypeGraphQL.Field(_type => SkillToStudentCreateInput, { nullable: false })
  data!: SkillToStudentCreateInput;
}
