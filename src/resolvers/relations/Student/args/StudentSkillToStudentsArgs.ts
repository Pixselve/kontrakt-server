import * as TypeGraphQL                                                                         from "type-graphql";
import { SkillToStudentOrderByInput, SkillToStudentWhereInput, SkillToStudentWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class StudentSkillToStudentsArgs {
  @TypeGraphQL.Field(_type => SkillToStudentWhereInput, { nullable: true })
  where?: SkillToStudentWhereInput | null;

  @TypeGraphQL.Field(_type => SkillToStudentOrderByInput, { nullable: true })
  orderBy?: SkillToStudentOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => SkillToStudentWhereUniqueInput, { nullable: true })
  after?: SkillToStudentWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => SkillToStudentWhereUniqueInput, { nullable: true })
  before?: SkillToStudentWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
