import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudentCreateInput } from "../../../inputs/StudentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStudentArgs {
  @TypeGraphQL.Field(_type => StudentCreateInput, { nullable: false })
  data!: StudentCreateInput;
}
