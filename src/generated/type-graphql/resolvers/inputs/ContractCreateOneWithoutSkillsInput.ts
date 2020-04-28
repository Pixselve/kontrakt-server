import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractCreateWithoutSkillsInput } from "../inputs/ContractCreateWithoutSkillsInput";
import { ContractWhereUniqueInput } from "../inputs/ContractWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractCreateOneWithoutSkillsInput {
  @Field(_type => ContractCreateWithoutSkillsInput, {
    nullable: true,
    description: undefined
  })
  create?: ContractCreateWithoutSkillsInput | null;

  @Field(_type => ContractWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ContractWhereUniqueInput | null;
}
