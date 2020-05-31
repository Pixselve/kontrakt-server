import * as TypeGraphQL from "type-graphql";
import { StudentCreateInput } from "../../../inputs/StudentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStudentArgs {
  @TypeGraphQL.Field((_type) => StudentCreateInput, { nullable: false })
  data!: StudentCreateInput;
}
