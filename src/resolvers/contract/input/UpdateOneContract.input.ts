import { Field, InputType, Int } from "type-graphql";
import { IsDate, IsHexColor, IsNotEmpty } from "class-validator";
import { Scalars } from "../../../utils/types";

@InputType()
export class UpdateOneContractInput {
  @Field((type) => String, {nullable: true, defaultValue: undefined})
  @IsNotEmpty()
  name?: Scalars["String"];

  @Field((type) => Date, {nullable: true, defaultValue: undefined})
  @IsDate()
  start?: Scalars["DateTime"];

  @Field((type) => Date, {nullable: true, defaultValue: undefined})
  @IsDate()
  end?: Scalars["DateTime"];

  @Field((type) => String, {nullable: true, defaultValue: undefined})
  @IsHexColor()
  rgb?: Scalars["String"];

  @Field(returns => [Int], {nullable: true, defaultValue: undefined})
  groupIds?: Scalars["Int"][]
}
