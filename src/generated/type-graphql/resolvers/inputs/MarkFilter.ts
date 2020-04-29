import * as TypeGraphQL from "type-graphql";
import { Mark } from "../../enums/Mark";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MarkFilter {
  @TypeGraphQL.Field(_type => Mark, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof Mark | null;

  @TypeGraphQL.Field(_type => Mark, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof Mark | null;

  @TypeGraphQL.Field(_type => [Mark], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof Mark> | null;

  @TypeGraphQL.Field(_type => [Mark], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof Mark> | null;
}
