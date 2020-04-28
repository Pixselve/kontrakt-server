import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateWithoutContractInput } from "../inputs/SkillCreateWithoutContractInput";
import { SkillScalarWhereInput } from "../inputs/SkillScalarWhereInput";
import { SkillUpdateManyWithWhereNestedInput } from "../inputs/SkillUpdateManyWithWhereNestedInput";
import { SkillUpdateWithWhereUniqueWithoutContractInput } from "../inputs/SkillUpdateWithWhereUniqueWithoutContractInput";
import { SkillUpsertWithWhereUniqueWithoutContractInput } from "../inputs/SkillUpsertWithWhereUniqueWithoutContractInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpdateManyWithoutContractInput {
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

  @Field(_type => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: SkillWhereUniqueInput[] | null;

  @Field(_type => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: SkillWhereUniqueInput[] | null;

  @Field(_type => [SkillWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: SkillWhereUniqueInput[] | null;

  @Field(_type => [SkillUpdateWithWhereUniqueWithoutContractInput], {
    nullable: true,
    description: undefined
  })
  update?: SkillUpdateWithWhereUniqueWithoutContractInput[] | null;

  @Field(_type => [SkillUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: SkillUpdateManyWithWhereNestedInput[] | null;

  @Field(_type => [SkillScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: SkillScalarWhereInput[] | null;

  @Field(_type => [SkillUpsertWithWhereUniqueWithoutContractInput], {
    nullable: true,
    description: undefined
  })
  upsert?: SkillUpsertWithWhereUniqueWithoutContractInput[] | null;
}
