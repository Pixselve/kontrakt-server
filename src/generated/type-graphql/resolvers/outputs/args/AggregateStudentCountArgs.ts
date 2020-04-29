import * as TypeGraphQL from "type-graphql";
import { StudentOrderByInput } from "../../inputs/StudentOrderByInput";
import { StudentWhereInput } from "../../inputs/StudentWhereInput";
import { StudentWhereUniqueInput } from "../../inputs/StudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStudentCountArgs {
  @TypeGraphQL.Field(_type => StudentWhereInput, { nullable: true })
  where?: StudentWhereInput | null;

  @TypeGraphQL.Field(_type => StudentOrderByInput, { nullable: true })
  orderBy?: StudentOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, { nullable: true })
  after?: StudentWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, { nullable: true })
  before?: StudentWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
