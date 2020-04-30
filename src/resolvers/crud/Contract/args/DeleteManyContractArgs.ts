import * as TypeGraphQL       from "type-graphql";
import { ContractWhereInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class DeleteManyContractArgs {
  @TypeGraphQL.Field(_type => ContractWhereInput, { nullable: true })
  where?: ContractWhereInput | null;
}
