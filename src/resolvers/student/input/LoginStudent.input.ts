import { Field, InputType, Int } from "type-graphql";
import { Max, Min } from "class-validator";
import { Scalars } from "../../../utils/types";

@InputType()
export class LoginStudentInput {
  @Field((type) => Int)
  @Min(100000)
  @Max(999999)
  username!: Scalars["Int"];
}
