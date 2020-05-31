import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Contract } from "../../../models/Contract";
import { UpdateContractArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Contract)
export class UpdateContractResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Contract, {
    nullable: true,
    description: undefined,
  })
  async updateContract(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateContractArgs
  ): Promise<Contract | null | undefined> {
    return ctx.prisma.contract.update(args);
  }
}
