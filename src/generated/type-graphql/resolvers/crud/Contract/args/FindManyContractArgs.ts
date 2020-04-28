import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractOrderByInput } from "../../../inputs/ContractOrderByInput";
import { ContractWhereInput } from "../../../inputs/ContractWhereInput";
import { ContractWhereUniqueInput } from "../../../inputs/ContractWhereUniqueInput";

@ArgsType()
export class FindManyContractArgs {
  @Field(_type => ContractWhereInput, { nullable: true })
  where?: ContractWhereInput | null;

  @Field(_type => ContractOrderByInput, { nullable: true })
  orderBy?: ContractOrderByInput | null;

  @Field(_type => Int, { nullable: true })
  skip?: number | null;

  @Field(_type => ContractWhereUniqueInput, { nullable: true })
  after?: ContractWhereUniqueInput | null;

  @Field(_type => ContractWhereUniqueInput, { nullable: true })
  before?: ContractWhereUniqueInput | null;

  @Field(_type => Int, { nullable: true })
  first?: number | null;

  @Field(_type => Int, { nullable: true })
  last?: number | null;
}
