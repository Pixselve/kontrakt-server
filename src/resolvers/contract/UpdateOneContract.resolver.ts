import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { Contract } from "../../models/Contract";
import { Context } from "../../index";
import { UpdateOneContractInput } from "./input/UpdateOneContract.input";

@Resolver(Contract)
export default class UpdateOneContractResolver {
  @Mutation((returns) => Contract)
  @Authorized("TEACHER")
  async updateOneContract(
    @Ctx() { prisma }: Context,
    @Arg("id", (returns) => Int) id: number,
    @Arg("contract")
    { end, name, rgb, groupIds, start }: UpdateOneContractInput
  ) {
    return prisma.contract.update({
      where: {
        id,
      },
      data: {
        end,
        name,
        rgb,
        start,
        groups: {
          set: groupIds?.map((groupId) => ({ id: groupId })) ?? undefined,
        },
      },
    });
  }
}
