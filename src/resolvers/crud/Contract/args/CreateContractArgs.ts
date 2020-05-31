import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractCreateInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class CreateContractArgs {
  @TypeGraphQL.Field(_type => ContractCreateInput, { nullable: false })
  data!: ContractCreateInput;
}
