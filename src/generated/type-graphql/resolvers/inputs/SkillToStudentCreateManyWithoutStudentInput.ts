import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentCreateWithoutStudentInput } from "../inputs/SkillToStudentCreateWithoutStudentInput";
import { SkillToStudentWhereUniqueInput } from "../inputs/SkillToStudentWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentCreateManyWithoutStudentInput {
  @Field(_type => [SkillToStudentCreateWithoutStudentInput], {
    nullable: true,
    description: undefined
  })
  create?: SkillToStudentCreateWithoutStudentInput[] | null;

  @Field(_type => [SkillToStudentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SkillToStudentWhereUniqueInput[] | null;
}
