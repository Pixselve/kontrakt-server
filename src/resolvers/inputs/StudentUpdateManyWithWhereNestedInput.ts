import * as TypeGraphQL from "type-graphql";
import { StudentScalarWhereInput } from "../inputs/StudentScalarWhereInput";
import { StudentUpdateManyDataInput } from "../inputs/StudentUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field((_type) => StudentScalarWhereInput, {
    nullable: false,
    description: undefined,
  })
  where!: StudentScalarWhereInput;

  @TypeGraphQL.Field((_type) => StudentUpdateManyDataInput, {
    nullable: false,
    description: undefined,
  })
  data!: StudentUpdateManyDataInput;
}
