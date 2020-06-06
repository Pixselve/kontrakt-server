import { Field, InterfaceType, ObjectType } from "type-graphql";
import { FixDecorator, Scalars } from "../utils/types";
import { Teacher } from "./Teacher";

@InterfaceType()
export abstract class AuthPayload {
  @Field((type) => String)
  token!: Scalars["String"];
}

@ObjectType({ implements: AuthPayload })
export class AuthPayloadTeacher extends AuthPayload {
  __typename?: "AuthPayloadTeacher";

  @Field((type) => String)
  token!: Scalars["String"];

  @Field((type) => Teacher)
  teacher!: FixDecorator<Teacher>;
}
