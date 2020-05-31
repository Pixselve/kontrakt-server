import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SkillUpdateManyMutationInput } from "../../../inputs/SkillUpdateManyMutationInput";
import { SkillWhereInput } from "../../../inputs/SkillWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySkillArgs {
  @TypeGraphQL.Field(_type => SkillUpdateManyMutationInput, { nullable: false })
  data!: SkillUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SkillWhereInput, { nullable: true })
  where?: SkillWhereInput | null | undefined;
}
