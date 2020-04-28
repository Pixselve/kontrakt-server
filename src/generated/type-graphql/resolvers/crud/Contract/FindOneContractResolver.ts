import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindOneContractArgs } from "./args/FindOneContractArgs";
import { Contract } from "../../../models/Contract";

@Resolver(_of => Contract)
export class FindOneContractResolver {
  @Query(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async contract(@Ctx() ctx: any, @Args() args: FindOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.findOne(args);
  }
}
