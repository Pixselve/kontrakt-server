import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentUpdateWithoutSkillDataInput } from "../inputs/SkillToStudentUpdateWithoutSkillDataInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithWhereUniqueWithoutSkillInput {
  @Field(_type => SkillToStudentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillToStudentWhereUniqueInput;

  @Field(_type => SkillToStudentUpdateWithoutSkillDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillToStudentUpdateWithoutSkillDataInput;
}
