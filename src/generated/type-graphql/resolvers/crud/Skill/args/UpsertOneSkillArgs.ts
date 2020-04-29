import * as TypeGraphQL from "type-graphql";
import { SkillCreateInput } from "../../../inputs/SkillCreateInput";
import { SkillUpdateInput } from "../../../inputs/SkillUpdateInput";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSkillArgs {
  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, { nullable: false })
  where!: SkillWhereUniqueInput;

  @TypeGraphQL.Field(_type => SkillCreateInput, { nullable: false })
  create!: SkillCreateInput;

  @TypeGraphQL.Field(_type => SkillUpdateInput, { nullable: false })
  update!: SkillUpdateInput;
}
