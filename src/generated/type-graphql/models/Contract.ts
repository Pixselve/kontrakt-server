import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Skill } from "../models/Skill";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Contract {
  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  date!: Date;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  skills?: Skill[] | null;
}
