import { Args, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../../../index";
import { CreateOneContractArgs } from "./args";
import { Contract } from "../../../models";

@Resolver()
export class CreateOneContract {
  @Authorized("TEACHER")
  @Mutation((returns) => Contract)
  async createOneContract(
    @Args() { data }: CreateOneContractArgs,
    @Ctx() { prisma }: Context
  ): Promise<Contract> {
    return prisma.contract.create({
      data: {
        start: data.start,
        end: data.end,
        name: data.name,
        skills: {
          create: data.skills?.map((skill) => ({ name: skill })),
        },
      },
    });
  }
}
