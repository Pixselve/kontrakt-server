import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractCreateWithoutSkillsInput } from "../inputs/ContractCreateWithoutSkillsInput";
import { ContractUpdateWithoutSkillsDataInput } from "../inputs/ContractUpdateWithoutSkillsDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpsertWithoutSkillsInput {
  @Field(_type => ContractUpdateWithoutSkillsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ContractUpdateWithoutSkillsDataInput;

  @Field(_type => ContractCreateWithoutSkillsInput, {
    nullable: false,
    description: undefined
  })
  create!: ContractCreateWithoutSkillsInput;
}
