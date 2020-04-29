import * as TypeGraphQL from "type-graphql";
import { SkillToStudentWhereInput } from "../inputs/SkillToStudentWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentFilter {
  @TypeGraphQL.Field(_type => SkillToStudentWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: SkillToStudentWhereInput | null;

  @TypeGraphQL.Field(_type => SkillToStudentWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: SkillToStudentWhereInput | null;

  @TypeGraphQL.Field(_type => SkillToStudentWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: SkillToStudentWhereInput | null;
}
