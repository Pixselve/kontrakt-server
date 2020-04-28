import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateWithoutContractInput } from "../inputs/SkillCreateWithoutContractInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillCreateManyWithoutContractInput {
  @Field(_type => [SkillCreateWithoutContractInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillCreateWithoutContractInput[] | null;

  @Field(_type => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillWhereUniqueInput[] | null;
}
