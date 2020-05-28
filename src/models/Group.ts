import { Field, Int, ObjectType } from "type-graphql";
import { Contract } from "./Contract";
import { Student } from "./Student";

@ObjectType({
  isAbstract: true,
})
export class Group {
  @Field((_type) => Int)
  id!: number;

  @Field((_type) => String)
  name!: string;

  contracts?: Contract[] | null | undefined;

  students?: Student[] | null | undefined;
}
