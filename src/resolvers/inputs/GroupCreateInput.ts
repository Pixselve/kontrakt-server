import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractCreateManyWithoutGroupsInput } from "../inputs/ContractCreateManyWithoutGroupsInput";
import { StudentCreateManyWithoutGroupsInput } from "../inputs/StudentCreateManyWithoutGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GroupCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => ContractCreateManyWithoutGroupsInput, {
    nullable: true,
    description: undefined
  })
  contracts?: ContractCreateManyWithoutGroupsInput | null | undefined;

  @TypeGraphQL.Field(_type => StudentCreateManyWithoutGroupsInput, {
    nullable: true,
    description: undefined
  })
  students?: StudentCreateManyWithoutGroupsInput | null | undefined;
}
