import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "../../index";
import { Contract } from "../../models/Contract";
import { CreateOneContractInput } from "./input/CreateOneContract.input";

@Resolver(Contract)
export default class CreateOneContractResolver {
  @Mutation((returns) => Contract)
  @Authorized("TEACHER")
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
