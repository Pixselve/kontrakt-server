import * as TypeGraphQL from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { SkillToStudentFilter } from "../inputs/SkillToStudentFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillScalarWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @TypeGraphQL.Field(_type => SkillToStudentFilter, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  contractId?: IntFilter | null;

  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillScalarWhereInput[] | null;
}
