import * as TypeGraphQL        from "type-graphql";
import { ContractCreateInput }      from "../../../inputs";
import { ContractUpdateInput }      from "../../../inputs";
import { ContractWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class UpsertOneContractArgs {
  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContractCreateInput, { nullable: false })
  create!: ContractCreateInput;

  @TypeGraphQL.Field(_type => ContractUpdateInput, { nullable: false })
  update!: ContractUpdateInput;
}
