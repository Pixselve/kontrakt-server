import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ContractOrderByInput } from "../../inputs/ContractOrderByInput";
import { ContractWhereInput } from "../../inputs/ContractWhereInput";
import { ContractWhereUniqueInput } from "../../inputs/ContractWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateContractCountArgs {
  @TypeGraphQL.Field(_type => ContractWhereInput, { nullable: true })
  where?: ContractWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => ContractOrderByInput, { nullable: true })
  orderBy?: ContractOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: true })
  after?: ContractWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => ContractWhereUniqueInput, { nullable: true })
  before?: ContractWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
