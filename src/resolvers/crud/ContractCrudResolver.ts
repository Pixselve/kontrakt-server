import {
  Arg,
  Args,
  ArgsType,
  Ctx,
  Field,
  FieldResolver,
  Float,
  ID,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  registerEnumType, Authorized
} from "type-graphql";
import { Contract } from "../../generated/type-graphql/models";
import {
  DeleteOneContractArgs,
  FindManyContractArgs,
  FindOneContractArgs, UpdateOneContractArgs
} from "../../generated/type-graphql/resolvers/crud/Contract/args";

@Resolver(_of => Contract)
export class ContractCrudResolver {
  @Query(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async contract(@Ctx() ctx: any, @Args() args: FindOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.findOne(args);
  }

  @Query(_returns => [Contract], {
    nullable: false,
    description: undefined
  })
  async contracts(@Ctx() ctx: any, @Args() args: FindManyContractArgs): Promise<Contract[]> {
    return ctx.prisma.contract.findMany(args);
  }
  @Authorized("TEACHER")
  @Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async deleteOneContract(@Ctx() ctx: any, @Args() args: DeleteOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.delete(args);
  }
  @Authorized("TEACHER")
  @Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async updateOneContract(@Ctx() ctx: any, @Args() args: UpdateOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.update(args);
  }

}
