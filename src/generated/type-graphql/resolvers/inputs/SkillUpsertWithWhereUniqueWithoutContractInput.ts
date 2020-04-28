import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateWithoutContractInput } from "../inputs/SkillCreateWithoutContractInput";
import { SkillUpdateWithoutContractDataInput } from "../inputs/SkillUpdateWithoutContractDataInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpsertWithWhereUniqueWithoutContractInput {
  @Field(_type => SkillWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillWhereUniqueInput;

  @Field(_type => SkillUpdateWithoutContractDataInput, {
    nullable: false,
    description: undefined
  })
  update!: SkillUpdateWithoutContractDataInput;

  @Field(_type => SkillCreateWithoutContractInput, {
    nullable: false,
    description: undefined
  })
  create!: SkillCreateWithoutContractInput;
}
