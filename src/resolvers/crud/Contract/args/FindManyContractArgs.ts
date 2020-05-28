import * as TypeGraphQL from "type-graphql";
import { ContractOrderByInput, ContractWhereInput, ContractWhereUniqueInput } from "../../../inputs";

@TypeGraphQL.ArgsType()
export class FindManyContractArgs {
  @TypeGraphQL.Field(_type => ContractWhereInput)
  where?: ContractWhereInput;

  @TypeGraphQL.Field(_type => ContractOrderByInput, { nullable: true })
  orderBy?: ContractOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: true })
  after?: ContractWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: true })
  before?: ContractWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
