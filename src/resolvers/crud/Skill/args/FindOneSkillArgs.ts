import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneSkillArgs {
  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, { nullable: false })
  where!: SkillWhereUniqueInput;
}
