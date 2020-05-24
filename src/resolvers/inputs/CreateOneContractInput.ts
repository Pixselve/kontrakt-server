import { Field, InputType } from "type-graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateOneContractInput {
  @Field()
  date!: Date;

  @Field()
  end!: Date;

  @Field()
  @IsNotEmpty()
  name!: string;

  @Field((type) => [String])
  skills!: string[];
}
