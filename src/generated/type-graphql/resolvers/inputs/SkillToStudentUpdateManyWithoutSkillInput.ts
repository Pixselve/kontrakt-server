import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentCreateWithoutSkillInput } from "../inputs/SkillToStudentCreateWithoutSkillInput";
import { SkillToStudentScalarWhereInput } from "../inputs/SkillToStudentScalarWhereInput";
import { SkillToStudentUpdateManyWithWhereNestedInput } from "../inputs/SkillToStudentUpdateManyWithWhereNestedInput";
import { SkillToStudentUpdateWithWhereUniqueWithoutSkillInput } from "../inputs/SkillToStudentUpdateWithWhereUniqueWithoutSkillInput";
import { SkillToStudentUpsertWithWhereUniqueWithoutSkillInput } from "../inputs/SkillToStudentUpsertWithWhereUniqueWithoutSkillInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateManyWithoutSkillInput {
  @Field(_type => [SkillToStudentCreateWithoutSkillInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillToStudentCreateWithoutSkillInput[] | null;

  @Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillToStudentWhereUniqueInput[] | null;

  @Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: SkillToStudentWhereUniqueInput[] | null;

  @Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: SkillToStudentWhereUniqueInput[] | null;

  @Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: SkillToStudentWhereUniqueInput[] | null;

  @Field(_type => [SkillToStudentUpdateWithWhereUniqueWithoutSkillInput], {
    nullable: true,
    description: undefined
  })
  update?: SkillToStudentUpdateWithWhereUniqueWithoutSkillInput[] | null;

  @Field(_type => [SkillToStudentUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: SkillToStudentUpdateManyWithWhereNestedInput[] | null;

  @Field(_type => [SkillToStudentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: SkillToStudentScalarWhereInput[] | null;

  @Field(_type => [SkillToStudentUpsertWithWhereUniqueWithoutSkillInput], {
    nullable: true,
    description: undefined
  })
  upsert?: SkillToStudentUpsertWithWhereUniqueWithoutSkillInput[] | null;
}
