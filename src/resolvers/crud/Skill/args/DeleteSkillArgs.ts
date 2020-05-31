import * as TypeGraphQL from "type-graphql";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSkillArgs {
  @TypeGraphQL.Field((_type) => SkillWhereUniqueInput, { nullable: false })
  where!: SkillWhereUniqueInput;
}
