import * as TypeGraphQL from "type-graphql";
import { Field, ObjectType } from "type-graphql";
import { Skill } from "./Skill";
import { Group } from "./Group";

@ObjectType({
  isAbstract: true,
})
export class Contract {
  @Field((_type) => Date)
  end!: Date;

  @Field((_type) => TypeGraphQL.Int)
  id!: number;

  @Field((_type) => String)
  name!: string;

  @Field((_type) => Date)
  start!: Date;

  skills?: Skill[] | null | undefined;

  groups?: Group[] | null | undefined;
}
