import { Field, Int, ObjectType } from "type-graphql";
import { Skill } from "./Skill";
import { Student } from "./Student";
import { Mark } from "./Mark";

@ObjectType({
  isAbstract: true,
})
export class SkillToStudent {
  @Field((_type) => String)
  markValue!: string;

  @Field((_type) => Int)
  skillId!: number;

  @Field((_type) => Int)
  studentId!: number;

  mark?: Mark;

  skill?: Skill;

  student?: Student;
}
