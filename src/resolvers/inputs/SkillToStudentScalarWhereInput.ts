import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  markValue?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  skillId?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  studentId?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillToStudentScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillToStudentScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillToStudentScalarWhereInput[] | null | undefined;
}
