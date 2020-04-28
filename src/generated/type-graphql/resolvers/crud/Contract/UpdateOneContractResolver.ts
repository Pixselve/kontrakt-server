import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateOneContractArgs } from "./args/UpdateOneContractArgs";
import { Contract } from "../../../models/Contract";

@Resolver(_of => Contract)
export class UpdateOneContractResolver {
  @Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async updateOneContract(@Ctx() ctx: any, @Args() args: UpdateOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.update(args);
  }
}
