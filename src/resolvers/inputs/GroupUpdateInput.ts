import * as TypeGraphQL from "type-graphql";
import { ContractUpdateManyWithoutGroupsInput } from "../inputs/ContractUpdateManyWithoutGroupsInput";
import { StudentUpdateManyWithoutGroupsInput } from "../inputs/StudentUpdateManyWithoutGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupUpdateInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | null | undefined;

  @TypeGraphQL.Field((_type) => ContractUpdateManyWithoutGroupsInput, {
    nullable: true,
    description: undefined,
  })
  contracts?: ContractUpdateManyWithoutGroupsInput | null | undefined;

  @TypeGraphQL.Field((_type) => StudentUpdateManyWithoutGroupsInput, {
    nullable: true,
    description: undefined,
  })
  students?: StudentUpdateManyWithoutGroupsInput | null | undefined;
}
