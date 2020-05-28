import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StudentCreateWithoutGroupsInput } from "../inputs/StudentCreateWithoutGroupsInput";
import { StudentScalarWhereInput } from "../inputs/StudentScalarWhereInput";
import { StudentUpdateManyWithWhereNestedInput } from "../inputs/StudentUpdateManyWithWhereNestedInput";
import { StudentUpdateWithWhereUniqueWithoutGroupsInput } from "../inputs/StudentUpdateWithWhereUniqueWithoutGroupsInput";
import { StudentUpsertWithWhereUniqueWithoutGroupsInput } from "../inputs/StudentUpsertWithWhereUniqueWithoutGroupsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentUpdateManyWithoutGroupsInput {
  @TypeGraphQL.Field(_type => [StudentCreateWithoutGroupsInput], {
    nullable: true,
    description: undefined
  })
  create?: StudentCreateWithoutGroupsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: StudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: StudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: StudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: StudentWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentUpdateWithWhereUniqueWithoutGroupsInput], {
    nullable: true,
    description: undefined
  })
  update?: StudentUpdateWithWhereUniqueWithoutGroupsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: StudentUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: StudentScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [StudentUpsertWithWhereUniqueWithoutGroupsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: StudentUpsertWithWhereUniqueWithoutGroupsInput[] | null | undefined;
}
