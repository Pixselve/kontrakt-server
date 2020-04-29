import * as TypeGraphQL from "type-graphql";
import { UpdateOneContractArgs } from "./args/UpdateOneContractArgs";
import { Contract } from "../../../models/Contract";

@TypeGraphQL.Resolver(_of => Contract)
export class UpdateOneContractResolver {
  @TypeGraphQL.Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async updateOneContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.update(args);
  }
}
