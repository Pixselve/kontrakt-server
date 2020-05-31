import * as TypeGraphQL from "type-graphql";
import { StudentCreateWithoutGroupsInput } from "../inputs/StudentCreateWithoutGroupsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentCreateManyWithoutGroupsInput {
  @TypeGraphQL.Field((_type) => [StudentCreateWithoutGroupsInput], {
    nullable: true,
    description: undefined,
  })
  create?: StudentCreateWithoutGroupsInput[] | null | undefined;

  @TypeGraphQL.Field((_type) => [StudentWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: StudentWhereUniqueInput[] | null | undefined;
}
