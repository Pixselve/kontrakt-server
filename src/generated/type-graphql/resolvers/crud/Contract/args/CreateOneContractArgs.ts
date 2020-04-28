import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractCreateInput } from "../../../inputs/ContractCreateInput";

@ArgsType()
export class CreateOneContractArgs {
  @Field(_type => ContractCreateInput, { nullable: false })
  data!: ContractCreateInput;
}
