import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentScalarWhereInput } from "../inputs/SkillToStudentScalarWhereInput";
import { SkillToStudentUpdateManyDataInput } from "../inputs/SkillToStudentUpdateManyDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudentUpdateManyWithWhereNestedInput {
  @Field(_type => SkillToStudentScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: SkillToStudentScalarWhereInput;

  @Field(_type => SkillToStudentUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SkillToStudentUpdateManyDataInput;
}
