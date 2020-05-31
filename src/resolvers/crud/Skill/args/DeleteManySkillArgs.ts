import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillWhereInput } from "../../../inputs/SkillWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySkillArgs {
  @TypeGraphQL.Field(_type => SkillWhereInput, { nullable: true })
  where?: SkillWhereInput | null | undefined;
}
