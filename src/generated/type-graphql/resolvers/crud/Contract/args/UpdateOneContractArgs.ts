import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractUpdateInput } from "../../../inputs/ContractUpdateInput";
import { ContractWhereUniqueInput } from "../../../inputs/ContractWhereUniqueInput";

@ArgsType()
export class UpdateOneContractArgs {
  @Field(_type => ContractUpdateInput, { nullable: false })
  data!: ContractUpdateInput;

  @Field(_type => ContractWhereUniqueInput, { nullable: false })
  where!: ContractWhereUniqueInput;
}
