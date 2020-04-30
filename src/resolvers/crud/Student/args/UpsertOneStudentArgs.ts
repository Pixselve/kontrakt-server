import * as TypeGraphQL from "type-graphql";
import { StudentCreateInput } from "../../../inputs/StudentCreateInput";
import { StudentUpdateInput } from "../../../inputs/StudentUpdateInput";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneStudentArgs {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, { nullable: false })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentCreateInput, { nullable: false })
  create!: StudentCreateInput;

  @TypeGraphQL.Field(_type => StudentUpdateInput, { nullable: false })
  update!: StudentUpdateInput;
}
