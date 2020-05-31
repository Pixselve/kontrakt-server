import * as TypeGraphQL from "type-graphql";
import { DeleteManyContractArgs } from "./args/DeleteManyContractArgs";
import { Contract } from "../../../models/Contract";
import { BatchPayload } from "../../outputs/BatchPayload";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Contract)
export class DeleteManyContractResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyContractArgs): Promise<BatchPayload> {
    return ctx.prisma.contract.deleteMany(args);
  }
}
