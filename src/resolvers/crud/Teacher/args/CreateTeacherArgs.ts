import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TeacherCreateInput } from "../../../inputs/TeacherCreateInput";
import { ValidateNested } from "class-validator";

@TypeGraphQL.ArgsType()
export class CreateTeacherArgs {

  @TypeGraphQL.Field(_type => TeacherCreateInput, { nullable: false })
  @ValidateNested({ each: true })
  data!: TeacherCreateInput;
}
