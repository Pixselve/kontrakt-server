import * as TypeGraphQL           from "type-graphql";
import { SkillStatusCreateInput } from "../../../inputs/SkillStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSkillStatusArgs {
  @TypeGraphQL.Field(_type => SkillStatusCreateInput, { nullable: false })
  data!: SkillStatusCreateInput;
}
