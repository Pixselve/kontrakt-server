import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Skill } from "../models/Skill";
import { Student } from "../models/Student";
import { Mark } from "../enums/Mark";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class SkillToStudent {
  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @Field(_type => Mark, {
    nullable: false,
    description: undefined,
  })
  mark!: keyof typeof Mark;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  skillId!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  studentId!: number;

  skill?: Skill;

  student?: Student;
}
