import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpsertOneContractArgs } from "./args/UpsertOneContractArgs";
import { Contract } from "../../../models/Contract";

@Resolver(_of => Contract)
export class UpsertOneContractResolver {
  @Mutation(_returns => Contract, {
    nullable: false,
    description: undefined
  })
  async upsertOneContract(@Ctx() ctx: any, @Args() args: UpsertOneContractArgs): Promise<Contract> {
    return ctx.prisma.contract.upsert(args);
  }
}
