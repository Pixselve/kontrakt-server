import * as TypeGraphQL from "type-graphql";

import { Contract } from "../../../models/Contract";
import { FindOneContractArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Contract)
export class FindOneContractResolver {
  @TypeGraphQL.Query((_returns) => Contract, {
    nullable: true,
    description: undefined,
  })
  async contract(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOneContractArgs
  ): Promise<Contract | null | undefined> {
    return ctx.prisma.contract.findOne(args);
  }
}
