import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateManyContractArgs } from "./args/UpdateManyContractArgs";
import { Contract } from "../../../models/Contract";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Contract)
export class UpdateManyContractResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyContract(@Ctx() ctx: any, @Args() args: UpdateManyContractArgs): Promise<BatchPayload> {
    return ctx.prisma.contract.updateMany(args);
  }
}
