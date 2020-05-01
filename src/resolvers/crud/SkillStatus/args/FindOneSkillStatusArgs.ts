import * as TypeGraphQL from "type-graphql";
import { SkillStatusWhereUniqueInput } from "../../../inputs/SkillStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneSkillStatusArgs {
  @TypeGraphQL.Field(_type => SkillStatusWhereUniqueInput, { nullable: false })
  where!: SkillStatusWhereUniqueInput;
}
