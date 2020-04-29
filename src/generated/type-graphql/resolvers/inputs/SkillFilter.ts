import * as TypeGraphQL from "type-graphql";
import { SkillWhereInput } from "../inputs/SkillWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillFilter {
  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: SkillWhereInput | null;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: SkillWhereInput | null;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: SkillWhereInput | null;
}
