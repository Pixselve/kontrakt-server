import { ArgsType, Field } from "type-graphql";
import { ContractWhereUniqueInput } from "../../../inputs/ContractWhereUniqueInput";


@ArgsType()
export class FindOneContractArgs {
  @Field((_type) => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;
}
