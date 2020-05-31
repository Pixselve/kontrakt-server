import * as TypeGraphQL from "type-graphql";
import { SkillToStudentFilter } from "../inputs/SkillToStudentFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkWhereInput {
  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
    description: undefined,
  })
  rgb?: StringFilter | null | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
    description: undefined,
  })
  text?: StringFilter | null | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
    description: undefined,
  })
  value?: StringFilter | null | undefined;

  @TypeGraphQL.Field((_type) => SkillToStudentFilter, {
    nullable: true,
    description: undefined,
  })
  skillsToStudents?: SkillToStudentFilter | null | undefined;

  @TypeGraphQL.Field((_type) => [MarkWhereInput], {
    nullable: true,
    description: undefined,
  })
  AND?: MarkWhereInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [MarkWhereInput], {
    nullable: true,
    description: undefined,
  })
  OR?: MarkWhereInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [MarkWhereInput], {
    nullable: true,
    description: undefined,
  })
  NOT?: MarkWhereInput[] | null | undefined;
}
