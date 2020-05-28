import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudentWhereInput } from "../inputs/StudentWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentFilter {
  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: StudentWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: StudentWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => StudentWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: StudentWhereInput | null | undefined;
}
