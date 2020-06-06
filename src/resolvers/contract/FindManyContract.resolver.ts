import { Ctx, Query, Resolver } from "type-graphql";
import { Contract } from "../../models/Contract";
import { Context } from "../../index";

@Resolver(Contract)
export default class FindManyContractResolver {
  @Query((returns) => [Contract])
  async contracts(@Ctx() { prisma }: Context) {
    return prisma.contract.findMany();
  }
}
