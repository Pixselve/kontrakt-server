import {
  Field,
  InputType,
}                                   from "type-graphql";
import { IsAlpha, Length, IsEmail } from "class-validator";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TeacherCreateInputCustom {

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @Length(5)
  password!: string;
}
