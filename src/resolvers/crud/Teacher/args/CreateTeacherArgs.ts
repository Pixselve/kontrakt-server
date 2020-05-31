import * as TypeGraphQL from "type-graphql";
import { TeacherCreateInput } from "../../../inputs/TeacherCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTeacherArgs {
  @TypeGraphQL.Field((_type) => TeacherCreateInput, { nullable: false })
  data!: TeacherCreateInput;
}
