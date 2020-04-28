import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractWhereUniqueInput } from "../../../inputs/ContractWhereUniqueInput";

@ArgsType()
export class DeleteOneContractArgs {
  @Field(_type => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;
}
