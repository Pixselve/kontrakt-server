import * as TypeGraphQL from "type-graphql";
import { UpsertOneContractArgs } from "./args/UpsertOneContractArgs";
import { Contract } from "../../../models/Contract";

@TypeGraphQL.Resolver(_of => Contract)
export class UpsertOneContractResolver {
  @TypeGraphQL.Mutation(_returns => Contract, {
    nullable: false,
    description: undefined
  })
  async upsertOneContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneContractArgs): Promise<Contract> {
    return ctx.prisma.contract.upsert(args);
  }
}
