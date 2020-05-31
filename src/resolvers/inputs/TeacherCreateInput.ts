import { Field, InputType } from "type-graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@InputType({})
export class TeacherCreateInput {
  @Field((_type) => String)
  @IsEmail()
  email!: string;

  @Field((_type) => String)
  @IsNotEmpty()
  @MinLength(3)
  password!: string;
}
