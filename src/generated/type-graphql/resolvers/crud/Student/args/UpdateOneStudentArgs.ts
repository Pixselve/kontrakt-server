import * as TypeGraphQL from "type-graphql";
import { StudentUpdateInput } from "../../../inputs/StudentUpdateInput";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStudentArgs {
  @TypeGraphQL.Field(_type => StudentUpdateInput, { nullable: false })
  data!: StudentUpdateInput;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, { nullable: false })
  where!: StudentWhereUniqueInput;
}
