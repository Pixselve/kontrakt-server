import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindManyContractArgs } from "./args/FindManyContractArgs";
import { Contract } from "../../../models/Contract";

@Resolver(_of => Contract)
export class FindManyContractResolver {
  @Query(_returns => [Contract], {
    nullable: false,
    description: undefined
  })
  async contracts(@Ctx() ctx: any, @Args() args: FindManyContractArgs): Promise<Contract[]> {
    return ctx.prisma.contract.findMany(args);
  }
}
