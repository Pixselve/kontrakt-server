import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractCreateWithoutGroupsInput } from "../inputs/ContractCreateWithoutGroupsInput";
import { ContractScalarWhereInput } from "../inputs/ContractScalarWhereInput";
import { ContractUpdateManyWithWhereNestedInput } from "../inputs/ContractUpdateManyWithWhereNestedInput";
import { ContractUpdateWithWhereUniqueWithoutGroupsInput } from "../inputs/ContractUpdateWithWhereUniqueWithoutGroupsInput";
import { ContractUpsertWithWhereUniqueWithoutGroupsInput } from "../inputs/ContractUpsertWithWhereUniqueWithoutGroupsInput";
import { ContractWhereUniqueInput } from "../inputs/ContractWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateManyWithoutGroupsInput {
  @TypeGraphQL.Field(_type => [ContractCreateWithoutGroupsInput], {
    nullable: true,
    description: undefined
  })
  create?: ContractCreateWithoutGroupsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ContractWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: ContractWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: ContractWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: ContractWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractUpdateWithWhereUniqueWithoutGroupsInput], {
    nullable: true,
    description: undefined
  })
  update?: ContractUpdateWithWhereUniqueWithoutGroupsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ContractUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ContractScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [ContractUpsertWithWhereUniqueWithoutGroupsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ContractUpsertWithWhereUniqueWithoutGroupsInput[] | null | undefined;
}
