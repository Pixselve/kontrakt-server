import * as TypeGraphQL from "type-graphql";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneStudentArgs {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, { nullable: false })
  where!: StudentWhereUniqueInput;
}
