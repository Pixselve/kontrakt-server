import { Field, ObjectType } from "type-graphql";
import { Teacher }  from "../../generated/type-graphql/models";

@ObjectType()
export class AuthPayload {
  @Field(type => String)
  token!: string;

  @Field(type => Teacher)
  teacher!: Teacher;

}