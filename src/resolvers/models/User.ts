import { Field, ObjectType } from "type-graphql";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

@ObjectType({})
export class User {
  @Field(returns => Teacher, { nullable: true })
  teacher?: Teacher;

  @Field(returns => Student, { nullable: true })
  student?: Student;
}
