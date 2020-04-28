import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillCreateWithoutSkillToStudentsInput } from "../inputs/SkillCreateWithoutSkillToStudentsInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillCreateOneWithoutSkillToStudentsInput {
  @Field(_type => SkillCreateWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  create?: SkillCreateWithoutSkillToStudentsInput | null;

  @Field(_type => SkillWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: SkillWhereUniqueInput | null;
}
