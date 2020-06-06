import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";
import { Contract } from "../../models/Contract";
import { Context } from "../../index";

@Resolver(Contract)
export default class DeleteOneContractResolver {
  @Query((returns) => Contract)
  async deleteOneContract(
    @Ctx() { prisma }: Context,
    @Arg("id", (returns) => Int) id: number
  ) {
    return prisma.contract.delete({ where: { id } });
  }
}
