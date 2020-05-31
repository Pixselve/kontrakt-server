import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Contract } from "../../../models/Contract";
import { UpdateManyContractArgs } from "./args";
import { BatchPayload } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Contract)
export class UpdateManyContractResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => BatchPayload, {
    nullable: false,
    description: undefined,
  })
  async updateManyContract(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateManyContractArgs
  ): Promise<BatchPayload> {
    return ctx.prisma.contract.updateMany(args);
  }
}
