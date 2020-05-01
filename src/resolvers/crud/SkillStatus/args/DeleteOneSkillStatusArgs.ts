import * as TypeGraphQL from "type-graphql";
import { SkillStatusWhereUniqueInput } from "../../../inputs/SkillStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSkillStatusArgs {
  @TypeGraphQL.Field(_type => SkillStatusWhereUniqueInput, { nullable: false })
  where!: SkillStatusWhereUniqueInput;
}
