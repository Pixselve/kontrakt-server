import { Field, ObjectType } from "type-graphql";
import { Scalars } from "../utils/types";

@ObjectType()
export class Teacher {
  __typename?: "Teacher";

  @Field((type) => String)
  email!: Scalars["String"];

  @Field((type) => String)
  password!: Scalars["String"];
}
