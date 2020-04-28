import {
  Field,
  InputType,
} from "type-graphql";

import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateStudentInput {

  @Field()
  @IsNotEmpty()
  firstName!: string;

  @Field()
  @IsNotEmpty()
  lastName!: string;
}
