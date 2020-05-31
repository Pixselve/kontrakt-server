import * as TypeGraphQL from "type-graphql";
import { StudentCreateWithoutGroupsInput } from "../inputs/StudentCreateWithoutGroupsInput";
import { StudentUpdateWithoutGroupsDataInput } from "../inputs/StudentUpdateWithoutGroupsDataInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpsertWithWhereUniqueWithoutGroupsInput {
  @TypeGraphQL.Field((_type) => StudentWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: StudentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => StudentUpdateWithoutGroupsDataInput, {
    nullable: false,
    description: undefined,
  })
  update!: StudentUpdateWithoutGroupsDataInput;

  @TypeGraphQL.Field((_type) => StudentCreateWithoutGroupsInput, {
    nullable: false,
    description: undefined,
  })
  create!: StudentCreateWithoutGroupsInput;
}
