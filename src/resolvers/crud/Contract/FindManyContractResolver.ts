import * as TypeGraphQL from "type-graphql";

import { Contract } from "../../../models/Contract";
import { FindManyContractArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Contract)
export class FindManyContractResolver {
  @TypeGraphQL.Query((_returns) => [Contract], {
    nullable: false,
    description: undefined,
  })
  async contracts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindManyContractArgs
  ): Promise<Contract[]> {
    return ctx.prisma.contract.findMany(args);
  }
}
