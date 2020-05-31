import { Args, Authorized, Ctx, Mutation, Resolver } from "type-graphql";

import { Contract } from "../../../models";
import { Context } from "../../../index";
import { CreateContractArgs } from "./args";

@Resolver((_of) => Contract)
export class CreateContractResolver {
  @Authorized("TEACHER")
  @Mutation((_returns) => Contract, {
    nullable: false,
    description: undefined,
  })
  async createContract(
    @Ctx() ctx: Context,
    @Args() args: CreateContractArgs
  ): Promise<Contract> {
    // @ts-ignore
    return ctx.prisma.contract.create(args);
  }
}
