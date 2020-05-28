import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GroupFilter } from "../inputs/GroupFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SkillToStudentFilter } from "../inputs/SkillToStudentFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  firstName?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  lastName?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  username?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => SkillToStudentFilter, {
    nullable: true,
    description: undefined
  })
  skillsToStudent?: SkillToStudentFilter | null | undefined;

  @TypeGraphQL.Field(_type => GroupFilter, {
    nullable: true,
    description: undefined
  })
  groups?: GroupFilter | null | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: StudentWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: StudentWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: StudentWhereInput[] | null | undefined;
}
