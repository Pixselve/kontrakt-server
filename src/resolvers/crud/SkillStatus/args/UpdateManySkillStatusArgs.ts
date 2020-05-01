import * as TypeGraphQL from "type-graphql";
import { SkillStatusUpdateManyMutationInput } from "../../../inputs/SkillStatusUpdateManyMutationInput";
import { SkillStatusWhereInput } from "../../../inputs/SkillStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySkillStatusArgs {
  @TypeGraphQL.Field(_type => SkillStatusUpdateManyMutationInput, { nullable: false })
  data!: SkillStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SkillStatusWhereInput, { nullable: true })
  where?: SkillStatusWhereInput | null;
}
