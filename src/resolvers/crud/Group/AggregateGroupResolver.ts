import * as TypeGraphQL from "type-graphql";
import { Group } from "../../../models/Group";
import { AggregateGroup } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Group)
export class AggregateGroupResolver {
  @TypeGraphQL.Query((_returns) => AggregateGroup, {
    nullable: false,
    description: undefined,
  })
  async aggregateGroup(): Promise<AggregateGroup> {
    return new AggregateGroup();
  }
}
