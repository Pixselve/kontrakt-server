import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteOneContractArgs } from "./args/DeleteOneContractArgs";
import { Contract } from "../../../models/Contract";

@Resolver(_of => Contract)
export class DeleteOneContractResolver {
  @Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async deleteOneContract(@Ctx() ctx: any, @Args() args: DeleteOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.delete(args);
  }
}
