import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractUpdateWithoutGroupsDataInput } from "../inputs/ContractUpdateWithoutGroupsDataInput";
import { ContractWhereUniqueInput } from "../inputs/ContractWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateWithWhereUniqueWithoutGroupsInput {
  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContractUpdateWithoutGroupsDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ContractUpdateWithoutGroupsDataInput;
}
