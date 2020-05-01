import * as TypeGraphQL from "type-graphql";
import { SkillStatusWhereInput } from "../inputs/SkillStatusWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillStatusFilter {
  @TypeGraphQL.Field(_type => SkillStatusWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: SkillStatusWhereInput | null;

  @TypeGraphQL.Field(_type => SkillStatusWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: SkillStatusWhereInput | null;

  @TypeGraphQL.Field(_type => SkillStatusWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: SkillStatusWhereInput | null;
}
