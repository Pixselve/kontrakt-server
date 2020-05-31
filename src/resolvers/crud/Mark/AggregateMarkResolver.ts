import * as TypeGraphQL from "type-graphql";
import { Mark } from "../../../models/Mark";
import { AggregateMark } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Mark)
export class AggregateMarkResolver {
  @TypeGraphQL.Query((_returns) => AggregateMark, {
    nullable: false,
    description: undefined,
  })
  async aggregateMark(): Promise<AggregateMark> {
    return new AggregateMark();
  }
}
