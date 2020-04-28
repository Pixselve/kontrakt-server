import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateWithoutSkillToStudentsInput } from "../inputs/SkillCreateWithoutSkillToStudentsInput";
import { SkillUpdateWithoutSkillToStudentsDataInput } from "../inputs/SkillUpdateWithoutSkillToStudentsDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillUpsertWithoutSkillToStudentsInput {
  @Field(_type => SkillUpdateWithoutSkillToStudentsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: SkillUpdateWithoutSkillToStudentsDataInput;

  @Field(_type => SkillCreateWithoutSkillToStudentsInput, {
    nullable: false,
    description: undefined
  })
  create!: SkillCreateWithoutSkillToStudentsInput;
}
