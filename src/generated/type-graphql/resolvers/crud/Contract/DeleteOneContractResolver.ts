import * as TypeGraphQL from "type-graphql";
import { DeleteOneContractArgs } from "./args/DeleteOneContractArgs";
import { Contract } from "../../../models/Contract";

@TypeGraphQL.Resolver(_of => Contract)
export class DeleteOneContractResolver {
  @TypeGraphQL.Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async deleteOneContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.delete(args);
  }
}
