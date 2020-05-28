import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IntFilter } from "../inputs/IntFilter";
import { MarkWhereInput } from "../inputs/MarkWhereInput";
import { SkillWhereInput } from "../inputs/SkillWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StudentWhereInput } from "../inputs/StudentWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentWhereInput {
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

  @TypeGraphQL.Field(_type => [SkillToStudentWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillToStudentWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillToStudentWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillToStudentWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => MarkWhereInput, {
    nullable: true,
    description: undefined
  })
  mark?: MarkWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true,
    description: undefined
  })
  skill?: SkillWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true,
    description: undefined
  })
  student?: StudentWhereInput | null | undefined;
}
