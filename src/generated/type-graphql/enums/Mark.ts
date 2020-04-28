import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";

export enum Mark {
  AWAITING_CORRECTION = "AWAITING_CORRECTION",
  GREEN = "GREEN",
  MARKED = "MARKED",
  ORANGE = "ORANGE",
  RED = "RED",
  BLUE = "BLUE",
  TODO = "TODO",
  TO_FINISH = "TO_FINISH"
}
registerEnumType(Mark, {
  name: "Mark",
  description: undefined,
});
