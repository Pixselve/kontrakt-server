import * as TypeGraphQL from "type-graphql";
import { GroupFilter } from "../inputs/GroupFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SkillToStudentFilter } from "../inputs/SkillToStudentFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentScalarWhereInput {
  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
    description: undefined,
  })
  firstName?: StringFilter | null | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
    description: undefined,
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
    description: undefined,
  })
  lastName?: StringFilter | null | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
    description: undefined,
  })
  username?: IntFilter | null | undefined;

  @TypeGraphQL.Field((_type) => SkillToStudentFilter, {
    nullable: true,
    description: undefined,
  })
  skillsToStudent?: SkillToStudentFilter | null | undefined;

  @TypeGraphQL.Field((_type) => GroupFilter, {
    nullable: true,
    description: undefined,
  })
  groups?: GroupFilter | null | undefined;

  @TypeGraphQL.Field((_type) => [StudentScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  AND?: StudentScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [StudentScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  OR?: StudentScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [StudentScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  NOT?: StudentScalarWhereInput[] | null | undefined;
}
