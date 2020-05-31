import * as TypeGraphQL from "type-graphql";
import { TeacherUpdateInput } from "../../../inputs/TeacherUpdateInput";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTeacherArgs {
  @TypeGraphQL.Field((_type) => TeacherUpdateInput, { nullable: false })
  data!: TeacherUpdateInput;

  @TypeGraphQL.Field((_type) => TeacherWhereUniqueInput, { nullable: false })
  where!: TeacherWhereUniqueInput;
}
