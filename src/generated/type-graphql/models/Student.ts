import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudent } from "../models/SkillToStudent";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Student {
  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  firstName!: string;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  lastName!: string;

  skillToStudents?: SkillToStudent[] | null;
}
