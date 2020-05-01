import * as TypeGraphQL from "type-graphql";
import { SkillStatusOrderByInput } from "../../../inputs/SkillStatusOrderByInput";
import { SkillStatusWhereInput } from "../../../inputs/SkillStatusWhereInput";
import { SkillStatusWhereUniqueInput } from "../../../inputs/SkillStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManySkillStatusArgs {
  @TypeGraphQL.Field(_type => SkillStatusWhereInput, { nullable: true })
  where?: SkillStatusWhereInput | null;

  @TypeGraphQL.Field(_type => SkillStatusOrderByInput, { nullable: true })
  orderBy?: SkillStatusOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => SkillStatusWhereUniqueInput, { nullable: true })
  after?: SkillStatusWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => SkillStatusWhereUniqueInput, { nullable: true })
  before?: SkillStatusWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
