import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Mark } from "../../enums/Mark";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkFilter {
  @Field(_type => Mark, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof Mark | null;

  @Field(_type => Mark, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof Mark | null;

  @Field(_type => [Mark], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof Mark> | null;

  @Field(_type => [Mark], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof Mark> | null;
}
