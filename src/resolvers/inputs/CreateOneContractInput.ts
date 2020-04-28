import {
  Field,
  InputType,
} from "type-graphql";

@InputType()
export class CreateOneContractInput {

  @Field()
  date!: Date;

  @Field(type => [String])
  skills!: string[];
}
