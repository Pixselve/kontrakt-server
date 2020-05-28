import { Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  DeleteOneContractArgs,
  FindManyContractArgs,
  FindOneContractArgs,
  UpdateOneContractArgs,
} from "./args";
import { Context } from "../../../index";
import { Contract } from "../../../models";

@Resolver((_of) => Contract)
export class ContractCrudResolver {
  @Query((_returns) => Contract, {
    nullable: true,
  })
  async contract(
    @Ctx() ctx: Context,
    @Args() args: FindOneContractArgs
  ): Promise<Contract | null> {
    return ctx.prisma.contract.findOne(args);
  }

  @Query((_returns) => [Contract])
  async contracts(
    @Ctx() ctx: Context,
    @Args() args: FindManyContractArgs
  ): Promise<Contract[]> {
    return ctx.prisma.contract.findMany(args);
  }

  @Authorized("TEACHER")
  @Mutation((_returns) => Contract, {
    nullable: true,
  })
  async deleteOneContract(
    @Ctx() ctx: Context,
    @Args() args: DeleteOneContractArgs
  ): Promise<Contract | null> {
    return ctx.prisma.contract.delete(args);
  }

  @Authorized("TEACHER")
  @Mutation((_returns) => Contract, {
    nullable: true,
  })
  async updateOneContract(
    @Ctx() ctx: Context,
    @Args() args: UpdateOneContractArgs
  ): Promise<Contract | null> {
    return ctx.prisma.contract.update(args);
  }
}
