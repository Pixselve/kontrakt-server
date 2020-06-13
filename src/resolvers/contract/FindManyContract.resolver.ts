import { Args, Ctx, Query, Resolver } from "type-graphql";
import { Contract } from "../../models/Contract";
import { Context } from "../../index";
import FindManyContractArgs from "./args/FindManyContract.args";

@Resolver(Contract)
export default class FindManyContractResolver {
  @Query((returns) => [Contract])
  async contracts(
    @Ctx() { prisma }: Context,
    @Args() { groups }: FindManyContractArgs
  ) {
    if (groups !== undefined) {
      return prisma.contract.findMany({
        where: { groups: { some: { id: { in: groups } } } },
      });
    } else {
      return prisma.contract.findMany();
    }

  }
}
