import * as TypeGraphQL from "type-graphql";
import { ContractUpdateManyWithoutGroupsInput } from "../inputs/ContractUpdateManyWithoutGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupUpdateWithoutStudentsDataInput {
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
}
