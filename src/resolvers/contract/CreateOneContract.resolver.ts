import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../../index";
import { Contract } from "../../models/Contract";
import { CreateOneContractInput } from "./input/CreateOneContract.input";

@Resolver(Contract)
export default class CreateOneContractResolver {
  @Query((returns) => Contract)
  async createOneContract(
    @Ctx() { prisma }: Context,
    @Arg("contract")
    { end, name, rgb, skillNames, start }: CreateOneContractInput
  ) {
    return prisma.contract.create({
      data: {
        start,
        end,
        name,
        rgb,
        skills: {
          create: skillNames.map((skillName) => ({ name: skillName })),
        },
      },
    });
  }
}
