import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractWhereInput } from "../../../inputs/ContractWhereInput";

@ArgsType()
export class DeleteManyContractArgs {
  @Field(_type => ContractWhereInput, { nullable: true })
  where?: ContractWhereInput | null;
}
