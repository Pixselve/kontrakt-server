import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneStudentArgs {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, { nullable: false })
  where!: StudentWhereUniqueInput;
}
