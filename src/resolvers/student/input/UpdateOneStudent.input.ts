import { Field, InputType, Int } from "type-graphql";
import { IsInt, IsNotEmpty, IsPositive } from "class-validator";
import { Scalars } from "../../../utils/types";

@InputType()
export class UpdateOneStudentInput {
  @Field((type) => String, { nullable: true, defaultValue: undefined })
  @IsNotEmpty()
  firstName?: Scalars["String"];

  @Field((type) => String, { nullable: true, defaultValue: undefined })
  @IsNotEmpty()
  lastName?: Scalars["String"];

  @Field((type) => [Int], { defaultValue: undefined, nullable: true })
  @IsInt({ each: true })
  @IsPositive({ each: true })
  groupIds?: Array<Scalars["Int"]>;
}
