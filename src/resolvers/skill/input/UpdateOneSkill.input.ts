import { Field, InputType } from "type-graphql";
import { IsNotEmpty } from "class-validator";
import { Scalars } from "../../../utils/types";

@InputType()
export class UpdateOneSkillInput {
  @Field((type) => String, { nullable: true, defaultValue: undefined })
  @IsNotEmpty()
  name!: Scalars["String"];
}
