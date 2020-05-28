import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
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
  every?: SkillToStudentWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => SkillToStudentWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: SkillToStudentWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => SkillToStudentWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: SkillToStudentWhereInput | null | undefined;
}
