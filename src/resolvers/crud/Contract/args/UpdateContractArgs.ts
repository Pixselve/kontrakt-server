import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractUpdateInput } from "../../../inputs/ContractUpdateInput";
import { ContractWhereUniqueInput } from "../../../inputs/ContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateContractArgs {
  @TypeGraphQL.Field(_type => ContractUpdateInput, { nullable: false })
  data!: ContractUpdateInput;

  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;
}
