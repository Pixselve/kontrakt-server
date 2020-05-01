import * as TypeGraphQL from "type-graphql";
import { SkillStatusCreateInput } from "../../../inputs/SkillStatusCreateInput";
import { SkillStatusUpdateInput } from "../../../inputs/SkillStatusUpdateInput";
import { SkillStatusWhereUniqueInput } from "../../../inputs/SkillStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSkillStatusArgs {
  @TypeGraphQL.Field(_type => SkillStatusWhereUniqueInput, { nullable: false })
  where!: SkillStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => SkillStatusCreateInput, { nullable: false })
  create!: SkillStatusCreateInput;

  @TypeGraphQL.Field(_type => SkillStatusUpdateInput, { nullable: false })
  update!: SkillStatusUpdateInput;
}
