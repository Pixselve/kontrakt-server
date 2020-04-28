import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteManyContractArgs } from "./args/DeleteManyContractArgs";
import { Contract } from "../../../models/Contract";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Contract)
export class DeleteManyContractResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyContract(@Ctx() ctx: any, @Args() args: DeleteManyContractArgs): Promise<BatchPayload> {
    return ctx.prisma.contract.deleteMany(args);
  }
}
