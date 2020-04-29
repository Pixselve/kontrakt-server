import * as TypeGraphQL from "type-graphql";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneSkillArgs {
  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, { nullable: false })
  where!: SkillWhereUniqueInput;
}
