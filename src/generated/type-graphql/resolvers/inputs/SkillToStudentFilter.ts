import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentWhereInput } from "../inputs/SkillToStudentWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentFilter {
  @Field(_type => SkillToStudentWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: SkillToStudentWhereInput | null;

  @Field(_type => SkillToStudentWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: SkillToStudentWhereInput | null;

  @Field(_type => SkillToStudentWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: SkillToStudentWhereInput | null;
}
