import * as TypeGraphQL from "type-graphql";
import {
  SkillToStudentOrderByInput,
  SkillToStudentWhereInput,
  SkillToStudentWhereUniqueInput,
} from "../../../inputs";

@TypeGraphQL.ArgsType()
export class SkillSkillToStudentsArgs {
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
