import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractCreateInput } from "../../../inputs/ContractCreateInput";
import { ContractUpdateInput } from "../../../inputs/ContractUpdateInput";
import { ContractWhereUniqueInput } from "../../../inputs/ContractWhereUniqueInput";

@ArgsType()
export class UpsertOneContractArgs {
  @Field(_type => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;

  @Field(_type => ContractCreateInput, { nullable: false })
  create!: ContractCreateInput;

  @Field(_type => ContractUpdateInput, { nullable: false })
  update!: ContractUpdateInput;
}
