import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractScalarWhereInput } from "../inputs/ContractScalarWhereInput";
import { ContractUpdateManyDataInput } from "../inputs/ContractUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => ContractScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: ContractScalarWhereInput;

  @TypeGraphQL.Field(_type => ContractUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ContractUpdateManyDataInput;
}
