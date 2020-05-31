import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractUpdateManyMutationInput } from "../../../inputs/ContractUpdateManyMutationInput";
import { ContractWhereInput } from "../../../inputs/ContractWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContractArgs {
  @TypeGraphQL.Field(_type => ContractUpdateManyMutationInput, { nullable: false })
  data!: ContractUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContractWhereInput, { nullable: true })
  where?: ContractWhereInput | null | undefined;
}
