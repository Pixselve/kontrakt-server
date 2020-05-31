import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Contract } from "../../../models/Contract";
import { UpsertContractArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Contract)
export class UpsertContractResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Contract, {
    nullable: false,
    description: undefined,
  })
  async upsertContract(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpsertContractArgs
  ): Promise<Contract> {
    return ctx.prisma.contract.upsert(args);
  }
}
