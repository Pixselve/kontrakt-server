import * as TypeGraphQL from "type-graphql";
import { TeacherWhereInput } from "../../../inputs/TeacherWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTeacherArgs {
  @TypeGraphQL.Field(_type => TeacherWhereInput, { nullable: true })
  where?: TeacherWhereInput | null;
}
