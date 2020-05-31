import * as TypeGraphQL from "type-graphql";
import { SkillToStudentOrderByInput } from "../../../inputs/SkillToStudentOrderByInput";
import { SkillToStudentWhereInput } from "../../../inputs/SkillToStudentWhereInput";
import { SkillToStudentWhereUniqueInput } from "../../../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManySkillToStudentArgs {
  @TypeGraphQL.Field((_type) => SkillToStudentWhereInput, { nullable: true })
  where?: SkillToStudentWhereInput | null | undefined;

  @TypeGraphQL.Field((_type) => SkillToStudentOrderByInput, { nullable: true })
  orderBy?: SkillToStudentOrderByInput | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field((_type) => SkillToStudentWhereUniqueInput, {
    nullable: true,
  })
  after?: SkillToStudentWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field((_type) => SkillToStudentWhereUniqueInput, {
    nullable: true,
  })
  before?: SkillToStudentWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
