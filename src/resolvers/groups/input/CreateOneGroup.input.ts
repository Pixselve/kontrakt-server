import { Field, InputType } from "type-graphql";
import { IsNotEmpty } from "class-validator";
import { Scalars } from "../../../utils/types";

@InputType()
export class CreateOneGroupInput {
  @Field((type) => String)
  @IsNotEmpty()
  name!: Scalars["String"];

}
