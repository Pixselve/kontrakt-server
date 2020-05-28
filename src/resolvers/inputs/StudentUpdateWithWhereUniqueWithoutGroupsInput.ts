import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudentUpdateWithoutGroupsDataInput } from "../inputs/StudentUpdateWithoutGroupsDataInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpdateWithWhereUniqueWithoutGroupsInput {
  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudentUpdateWithoutGroupsDataInput, {
    nullable: false,
    description: undefined
  })
  data!: StudentUpdateWithoutGroupsDataInput;
}
