import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { StudentCreateWithoutSkillToStudentsInput } from "../inputs/StudentCreateWithoutSkillToStudentsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentCreateOneWithoutSkillToStudentsInput {
  @Field(_type => StudentCreateWithoutSkillToStudentsInput, {
    nullable: true,
    description: undefined
  })
  create?: StudentCreateWithoutSkillToStudentsInput | null;

  @Field(_type => StudentWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: StudentWhereUniqueInput | null;
}
