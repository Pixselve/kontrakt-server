import { Field, ObjectType } from "type-graphql";
import { Teacher }           from "./Teacher";

@ObjectType()
export class AuthPayload {
  @Field(type => String)
  token!: string;

  @Field(type => Teacher)
  teacher!: Teacher;

}