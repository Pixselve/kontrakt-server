import * as TypeGraphQL from "type-graphql";
import { FindManyContractArgs } from "./args/FindManyContractArgs";
import { Contract } from "../../../models/Contract";

@TypeGraphQL.Resolver(_of => Contract)
export class FindManyContractResolver {
  @TypeGraphQL.Query(_returns => [Contract], {
    nullable: false,
    description: undefined
  })
  async contracts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyContractArgs): Promise<Contract[]> {
    return ctx.prisma.contract.findMany(args);
  }
}
