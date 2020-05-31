import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractWhereInput } from "../inputs/ContractWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractFilter {
  @TypeGraphQL.Field(_type => ContractWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: ContractWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => ContractWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: ContractWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => ContractWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: ContractWhereInput | null | undefined;
}
