import {
  Field,
  InputType, Int,
} from "type-graphql";
import { IsAlpha, Length, IsEmail } from "class-validator";

@InputType({})
export class RemoveOneContractInput {

  @Field(returns => Int)
  id!: number;
}
