import * as TypeGraphQL from "type-graphql";
import { ContractWhereUniqueInput } from "../../../inputs/ContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneContractArgs {
  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;
}
