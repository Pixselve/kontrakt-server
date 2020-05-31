import * as TypeGraphQL from "type-graphql";
import { ContractCreateInput } from "../../../inputs/ContractCreateInput";

@TypeGraphQL.ArgsType()
export class CreateContractArgs {
  @TypeGraphQL.Field((_type) => ContractCreateInput, { nullable: false })
  data!: ContractCreateInput;
}
