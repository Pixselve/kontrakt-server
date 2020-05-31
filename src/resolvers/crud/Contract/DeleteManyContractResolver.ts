import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Contract } from "../../../models/Contract";
import { DeleteManyContractArgs } from "./args";
import { BatchPayload } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Contract)
export class DeleteManyContractResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => BatchPayload, {
    nullable: false,
    description: undefined,
  })
  async deleteManyContract(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteManyContractArgs
  ): Promise<BatchPayload> {
    return ctx.prisma.contract.deleteMany(args);
  }
}
