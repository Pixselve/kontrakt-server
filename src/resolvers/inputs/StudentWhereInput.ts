import * as TypeGraphQL from "type-graphql";
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
  firstName?: StringFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  lastName?: StringFilter | null;

  @TypeGraphQL.Field(_type => SkillToStudentFilter, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentFilter | null;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: StudentWhereInput[] | null;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: StudentWhereInput[] | null;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: StudentWhereInput[] | null;
}
