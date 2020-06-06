import { Arg, Authorized, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { Contract } from "../../models/Contract";
import { Context } from "../../index";

@Resolver(Contract)
export default class DeleteOneContractResolver {
  @Mutation((returns) => Contract)
  @Authorized("TEACHER")
  async deleteOneContract(
    @Ctx() { prisma }: Context,
    @Arg("id", (returns) => Int) id: number
  ) {
    return prisma.contract.delete({ where: { id } });
  }
}
