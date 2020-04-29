import * as TypeGraphQL from "type-graphql";
import { ContractWhereUniqueInput } from "../../../inputs/ContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneContractArgs {
  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;
}
