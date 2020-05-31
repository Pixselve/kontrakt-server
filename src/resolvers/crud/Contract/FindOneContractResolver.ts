import * as TypeGraphQL from "type-graphql";
import { FindOneContractArgs } from "./args/FindOneContractArgs";
import { Contract } from "../../../models/Contract";

@TypeGraphQL.Resolver(_of => Contract)
export class FindOneContractResolver {
  @TypeGraphQL.Query(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async contract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneContractArgs): Promise<Contract | null | undefined> {
    return ctx.prisma.contract.findOne(args);
  }
}
