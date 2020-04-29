import * as TypeGraphQL from "type-graphql";
import { SkillToStudentOrderByInput } from "../../../inputs/SkillToStudentOrderByInput";
import { SkillToStudentWhereInput } from "../../../inputs/SkillToStudentWhereInput";
import { SkillToStudentWhereUniqueInput } from "../../../inputs/SkillToStudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManySkillToStudentArgs {
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
