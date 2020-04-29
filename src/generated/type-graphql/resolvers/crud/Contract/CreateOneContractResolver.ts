import * as TypeGraphQL from "type-graphql";
import { CreateOneContractArgs } from "./args/CreateOneContractArgs";
import { Contract } from "../../../models/Contract";

@TypeGraphQL.Resolver(_of => Contract)
export class CreateOneContractResolver {
  @TypeGraphQL.Mutation(_returns => Contract, {
    nullable: false,
    description: undefined
  })
  async createOneContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneContractArgs): Promise<Contract> {
    return ctx.prisma.contract.create(args);
  }
}
