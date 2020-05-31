import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractWhereInput } from "../../../inputs/ContractWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContractArgs {
  @TypeGraphQL.Field(_type => ContractWhereInput, { nullable: true })
  where?: ContractWhereInput | null | undefined;
}
