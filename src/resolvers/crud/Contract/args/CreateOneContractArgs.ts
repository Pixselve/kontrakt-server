import * as TypeGraphQL        from "type-graphql";
import { ContractCreateInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class CreateOneContractArgs {
  @TypeGraphQL.Field(_type => ContractCreateInput, { nullable: false })
  data!: ContractCreateInput;
}
