import * as TypeGraphQL from "type-graphql";
import { SkillStatusUpdateInput } from "../../../inputs/SkillStatusUpdateInput";
import { SkillStatusWhereUniqueInput } from "../../../inputs/SkillStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSkillStatusArgs {
  @TypeGraphQL.Field(_type => SkillStatusUpdateInput, { nullable: false })
  data!: SkillStatusUpdateInput;

  @TypeGraphQL.Field(_type => SkillStatusWhereUniqueInput, { nullable: false })
  where!: SkillStatusWhereUniqueInput;
}
