import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillCreateInput } from "../../../inputs/SkillCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSkillArgs {
  @TypeGraphQL.Field(_type => SkillCreateInput, { nullable: false })
  data!: SkillCreateInput;
}
