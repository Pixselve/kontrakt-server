import * as TypeGraphQL from "type-graphql";
import { UpdateManyContractArgs } from "./args/UpdateManyContractArgs";
import { Contract } from "../../../models/Contract";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Contract)
export class UpdateManyContractResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyContractArgs): Promise<BatchPayload> {
    return ctx.prisma.contract.updateMany(args);
  }
}
