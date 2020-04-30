import * as TypeGraphQL from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { MarkFilter } from "../inputs/MarkFilter";
import { SkillWhereInput } from "../inputs/SkillWhereInput";
import { StudentWhereInput } from "../inputs/StudentWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @TypeGraphQL.Field(_type => MarkFilter, {
    nullable: true,
    description: undefined
  })
  mark?: MarkFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  skillId?: IntFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  studentId?: IntFilter | null;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillToStudentWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillToStudentWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillToStudentWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillToStudentWhereInput[] | null;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true,
    description: undefined
  })
  skill?: SkillWhereInput | null;

  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true,
    description: undefined
  })
  student?: StudentWhereInput | null;
}
