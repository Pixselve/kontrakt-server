import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
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
  contractId?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => SkillToStudentFilter, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentFilter | null | undefined;

  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SkillScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SkillScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SkillScalarWhereInput[] | null | undefined;
}
