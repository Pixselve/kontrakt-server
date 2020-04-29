import * as TypeGraphQL from "type-graphql";
import { ContractCreateInput } from "../../../inputs/ContractCreateInput";
import { ContractUpdateInput } from "../../../inputs/ContractUpdateInput";
import { ContractWhereUniqueInput } from "../../../inputs/ContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContractArgs {
  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContractCreateInput, { nullable: false })
  create!: ContractCreateInput;

  @TypeGraphQL.Field(_type => ContractUpdateInput, { nullable: false })
  update!: ContractUpdateInput;
}
