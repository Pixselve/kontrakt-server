import * as TypeGraphQL             from "type-graphql";
import { ContractUpdateInput }      from "../../../inputs";
import { ContractWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class UpdateOneContractArgs {
  @TypeGraphQL.Field(_type => ContractUpdateInput, { nullable: false })
  data!: ContractUpdateInput;

  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;
}
