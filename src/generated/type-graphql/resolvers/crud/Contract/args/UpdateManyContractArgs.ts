import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractUpdateManyMutationInput } from "../../../inputs/ContractUpdateManyMutationInput";
import { ContractWhereInput } from "../../../inputs/ContractWhereInput";

@ArgsType()
export class UpdateManyContractArgs {
  @Field(_type => ContractUpdateManyMutationInput, { nullable: false })
  data!: ContractUpdateManyMutationInput;

  @Field(_type => ContractWhereInput, { nullable: true })
  where?: ContractWhereInput | null;
}
