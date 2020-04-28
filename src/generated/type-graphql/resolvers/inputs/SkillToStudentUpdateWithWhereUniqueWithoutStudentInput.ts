import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentUpdateWithoutStudentDataInput } from "../inputs/SkillToStudentUpdateWithoutStudentDataInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateWithWhereUniqueWithoutStudentInput {
  @Field(_type => SkillToStudentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillToStudentWhereUniqueInput;

  @Field(_type => SkillToStudentUpdateWithoutStudentDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillToStudentUpdateWithoutStudentDataInput;
}
