import * as TypeGraphQL from "type-graphql";

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
TypeGraphQL.registerEnumType(Mark, {
  name: "Mark",
  description: undefined,
});
