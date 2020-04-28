import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudentCreateManyWithoutStudentInput } from "../inputs/SkillToStudentCreateManyWithoutStudentInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class StudentCreateInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  firstName!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  lastName!: string;

  @Field(_type => SkillToStudentCreateManyWithoutStudentInput, {
    nullable: true,
    description: undefined
  })
  skillToStudents?: SkillToStudentCreateManyWithoutStudentInput | null;
}
