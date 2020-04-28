import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ContractCreateWithoutSkillsInput } from "../inputs/ContractCreateWithoutSkillsInput";
import { ContractUpdateWithoutSkillsDataInput } from "../inputs/ContractUpdateWithoutSkillsDataInput";
import { ContractUpsertWithoutSkillsInput } from "../inputs/ContractUpsertWithoutSkillsInput";
import { ContractWhereUniqueInput } from "../inputs/ContractWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ContractUpdateOneRequiredWithoutSkillsInput {
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

  @Field(_type => ContractUpdateWithoutSkillsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ContractUpdateWithoutSkillsDataInput | null;

  @Field(_type => ContractUpsertWithoutSkillsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ContractUpsertWithoutSkillsInput | null;
}
