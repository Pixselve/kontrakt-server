import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillUpdateInput } from "../../../inputs/SkillUpdateInput";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSkillArgs {
  @TypeGraphQL.Field(_type => SkillUpdateInput, { nullable: false })
  data!: SkillUpdateInput;

  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, { nullable: false })
  where!: SkillWhereUniqueInput;
}
