import * as TypeGraphQL from "type-graphql";
import { ContractCreateManyWithoutGroupsInput } from "../inputs/ContractCreateManyWithoutGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupCreateWithoutStudentsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => ContractCreateManyWithoutGroupsInput, {
    nullable: true,
    description: undefined,
  })
  contracts?: ContractCreateManyWithoutGroupsInput | null | undefined;
}
