import { Field, InputType, Int } from "type-graphql";
import { IsInt, IsNotEmpty, IsPositive } from "class-validator";
import { Scalars } from "../../../utils/types";

@InputType()
export class CreateOneSkillInput {
  @Field((type) => String)
  @IsNotEmpty()
  name!: Scalars["String"];

  @Field((returns) => Int)
  @IsInt()
  @IsPositive()
  contractId!: Scalars["Int"];
}
