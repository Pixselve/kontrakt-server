import * as TypeGraphQL from "type-graphql";
import { Field } from "type-graphql";
import { Skill } from "./Skill";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Contract {
  @Field(_type => Date)
  date!: Date;

  @Field(_type => Date)
  end!: Date;

  @Field()
  name!: string;


  @Field(_type => TypeGraphQL.Int)
  id!: number;

  skills?: Skill[] | null;
}
