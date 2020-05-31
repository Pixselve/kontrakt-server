import * as TypeGraphQL from "type-graphql";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTeacherArgs {
  @TypeGraphQL.Field((_type) => TeacherWhereUniqueInput, { nullable: false })
  where!: TeacherWhereUniqueInput;
}
