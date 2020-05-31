import * as TypeGraphQL from "type-graphql";
import { Contract } from "../../../models/Contract";
import { AggregateContract } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Contract)
export class AggregateContractResolver {
  @TypeGraphQL.Query((_returns) => AggregateContract, {
    nullable: false,
    description: undefined,
  })
  async aggregateContract(): Promise<AggregateContract> {
    return new AggregateContract();
  }
}
