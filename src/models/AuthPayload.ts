import { Field, InterfaceType, ObjectType } from "type-graphql";
import { FixDecorator, Scalars } from "../utils/types";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

@InterfaceType()
export abstract class AuthPayload {
  @Field((type) => String)
  token!: Scalars["String"];
}

@ObjectType({ implements: AuthPayload })
export class AuthPayloadTeacher extends AuthPayload {
  @Field((type) => String)
  token!: Scalars["String"];

  @Field((type) => Teacher)
  teacher!: FixDecorator<Teacher>;
}

@ObjectType({ implements: AuthPayload })
export class AuthPayloadStudent extends AuthPayload {
  @Field((type) => String)
  token!: Scalars["String"];

  @Field((type) => Student)
  student!: FixDecorator<Student>;
}
