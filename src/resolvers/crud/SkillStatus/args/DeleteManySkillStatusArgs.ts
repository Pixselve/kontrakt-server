import * as TypeGraphQL          from "type-graphql";
import { SkillStatusWhereInput } from "../../../inputs/SkillStatusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySkillStatusArgs {
  @TypeGraphQL.Field(_type => SkillStatusWhereInput, { nullable: true })
  where?: SkillStatusWhereInput | null;
}
