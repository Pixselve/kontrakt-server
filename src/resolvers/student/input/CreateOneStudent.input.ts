import { Field, InputType, Int } from "type-graphql";
import { Scalars } from "../../../utils/types";
import { IsInt, IsNotEmpty, IsPositive } from "class-validator";

@InputType()
export class CreateOneStudentInput {

  @Field(type => String)
  @IsNotEmpty()
  firstName!: Scalars['String'];

  @Field(type => String)
  @IsNotEmpty()
  lastName!: Scalars['String'];

  @Field(type => [Int], {defaultValue: []})
  @IsInt({ each: true })
  @IsPositive({ each: true })
  groupIds!: Array<Scalars['Int']>;
}
