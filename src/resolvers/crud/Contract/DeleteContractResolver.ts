import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Contract } from "../../../models/Contract";
import { DeleteContractArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Contract)
export class DeleteContractResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Contract, {
    nullable: true,
    description: undefined,
  })
  async deleteContract(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteContractArgs
  ): Promise<Contract | null | undefined> {
    return ctx.prisma.contract.delete(args);
  }
}
