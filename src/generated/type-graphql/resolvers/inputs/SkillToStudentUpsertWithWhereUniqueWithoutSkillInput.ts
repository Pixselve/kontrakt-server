import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentCreateWithoutSkillInput } from "../inputs/SkillToStudentCreateWithoutSkillInput";
import { SkillToStudentUpdateWithoutSkillDataInput } from "../inputs/SkillToStudentUpdateWithoutSkillDataInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpsertWithWhereUniqueWithoutSkillInput {
  @Field(_type => SkillToStudentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillToStudentWhereUniqueInput;

  @Field(_type => SkillToStudentUpdateWithoutSkillDataInput, {
    nullable: false,
    description: undefined
  })
  update!: SkillToStudentUpdateWithoutSkillDataInput;

  @Field(_type => SkillToStudentCreateWithoutSkillInput, {
    nullable: false,
    description: undefined
  })
  create!: SkillToStudentCreateWithoutSkillInput;
}
