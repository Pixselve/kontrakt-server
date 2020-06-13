import { Field, InputType } from "type-graphql";
import { Scalars } from "../../../utils/types";
import { IsDate, IsHexColor, IsNotEmpty } from "class-validator";

@InputType()
export class CreateOneContractInput {
  @Field((type) => String)
  @IsNotEmpty()
  name!: Scalars["String"];

  @Field((type) => Date)
  @IsDate()
  start!: Scalars["DateTime"];

  @Field((type) => Date)
  @IsDate()
  end!: Scalars["DateTime"];

  @Field((type) => [String])
  @IsNotEmpty({ each: true })
  skillNames!: Array<Scalars["String"]>;

  @Field((type) => String)
  @IsHexColor()
  rgb!: Scalars["String"];
}
