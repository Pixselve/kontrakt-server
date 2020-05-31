import * as TypeGraphQL from "type-graphql";
import { StudentWhereInput } from "../../../inputs/StudentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStudentArgs {
  @TypeGraphQL.Field((_type) => StudentWhereInput, { nullable: true })
  where?: StudentWhereInput | null | undefined;
}
