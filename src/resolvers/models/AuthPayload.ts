import { Field, ObjectType } from "type-graphql";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

@ObjectType()
export class AuthPayload {
  @Field(type => String)
  token!: string;

  @Field(type => Teacher)
  teacher!: Teacher;

}

@ObjectType()
export class StudentAuthPayload {
  @Field(type => String)
  token!: string;

  @Field(type => Student)
  student!: Student;
}
