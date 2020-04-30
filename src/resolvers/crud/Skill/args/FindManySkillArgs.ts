import * as TypeGraphQL from "type-graphql";
import { SkillOrderByInput } from "../../../inputs/SkillOrderByInput";
import { SkillWhereInput } from "../../../inputs/SkillWhereInput";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManySkillArgs {
  @TypeGraphQL.Field(_type => SkillWhereInput, { nullable: true })
  where?: SkillWhereInput | null;

  @TypeGraphQL.Field(_type => SkillOrderByInput, { nullable: true })
  orderBy?: SkillOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, { nullable: true })
  after?: SkillWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, { nullable: true })
  before?: SkillWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
