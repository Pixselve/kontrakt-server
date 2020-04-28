import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneContractArgs } from "./args/CreateOneContractArgs";
import { Contract } from "../../../models/Contract";

@Resolver(_of => Contract)
export class CreateOneContractResolver {
  @Mutation(_returns => Contract, {
    nullable: false,
    description: undefined
  })
  async createOneContract(@Ctx() ctx: any, @Args() args: CreateOneContractArgs): Promise<Contract> {
    return ctx.prisma.contract.create(args);
  }
}
