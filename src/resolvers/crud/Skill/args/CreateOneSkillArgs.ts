import * as TypeGraphQL from "type-graphql";
import { SkillCreateInput } from "../../../inputs/SkillCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSkillArgs {
  @TypeGraphQL.Field(_type => SkillCreateInput, { nullable: false })
  data!: SkillCreateInput;
}
