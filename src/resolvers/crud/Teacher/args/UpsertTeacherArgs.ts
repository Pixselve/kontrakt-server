import * as TypeGraphQL from "type-graphql";
import { TeacherCreateInput } from "../../../inputs/TeacherCreateInput";
import { TeacherUpdateInput } from "../../../inputs/TeacherUpdateInput";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTeacherArgs {
  @TypeGraphQL.Field((_type) => TeacherWhereUniqueInput, { nullable: false })
  where!: TeacherWhereUniqueInput;

  @TypeGraphQL.Field((_type) => TeacherCreateInput, { nullable: false })
  create!: TeacherCreateInput;

  @TypeGraphQL.Field((_type) => TeacherUpdateInput, { nullable: false })
  update!: TeacherUpdateInput;
}
