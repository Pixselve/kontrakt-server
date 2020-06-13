import { Field, InputType } from "type-graphql";
import { Scalars } from "../../../utils/types";
import { IsEmail, MinLength } from "class-validator";

@InputType()
export class CreateOneTeacherInput {
  @Field((type) => String)
  @IsEmail()
  email!: Scalars["String"];

  @Field((type) => String)
  @MinLength(3)
  password!: Scalars["String"];
}
