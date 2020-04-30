import * as TypeGraphQL from "type-graphql";
import { StudentCreateInput } from "../../../inputs/StudentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStudentArgs {
  @TypeGraphQL.Field(_type => StudentCreateInput, { nullable: false })
  data!: StudentCreateInput;
}
