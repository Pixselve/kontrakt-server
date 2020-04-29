import * as TypeGraphQL from "type-graphql";
import { TeacherOrderByInput } from "../../inputs/TeacherOrderByInput";
import { TeacherWhereInput } from "../../inputs/TeacherWhereInput";
import { TeacherWhereUniqueInput } from "../../inputs/TeacherWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTeacherCountArgs {
  @TypeGraphQL.Field(_type => TeacherWhereInput, { nullable: true })
  where?: TeacherWhereInput | null;

  @TypeGraphQL.Field(_type => TeacherOrderByInput, { nullable: true })
  orderBy?: TeacherOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => TeacherWhereUniqueInput, { nullable: true })
  after?: TeacherWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TeacherWhereUniqueInput, { nullable: true })
  before?: TeacherWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
