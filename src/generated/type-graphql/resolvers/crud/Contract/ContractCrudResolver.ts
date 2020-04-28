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
  registerEnumType,
  Authorized
} from "type-graphql";
import { CreateOneContractArgs } from "./args/CreateOneContractArgs";
import { DeleteManyContractArgs } from "./args/DeleteManyContractArgs";
import { DeleteOneContractArgs } from "./args/DeleteOneContractArgs";
import { FindManyContractArgs } from "./args/FindManyContractArgs";
import { FindOneContractArgs } from "./args/FindOneContractArgs";
import { UpdateManyContractArgs } from "./args/UpdateManyContractArgs";
import { UpdateOneContractArgs } from "./args/UpdateOneContractArgs";
import { UpsertOneContractArgs } from "./args/UpsertOneContractArgs";
import { Contract } from "../../../models/Contract";
import { BatchPayload } from "../../outputs/BatchPayload";

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
  @Authorized()
  @Mutation(_returns => Contract, {
    nullable: false,
    description: undefined
  })
  async createOneContract(@Ctx() ctx: any, @Args() args: CreateOneContractArgs): Promise<Contract> {
    return ctx.prisma.contract.create(args);
  }
  @Authorized()
  @Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async deleteOneContract(@Ctx() ctx: any, @Args() args: DeleteOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.delete(args);
  }
  @Authorized()
  @Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async updateOneContract(@Ctx() ctx: any, @Args() args: UpdateOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.update(args);
  }
  @Authorized()
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyContract(@Ctx() ctx: any, @Args() args: DeleteManyContractArgs): Promise<BatchPayload> {
    return ctx.prisma.contract.deleteMany(args);
  }
  @Authorized()
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyContract(@Ctx() ctx: any, @Args() args: UpdateManyContractArgs): Promise<BatchPayload> {
    return ctx.prisma.contract.updateMany(args);
  }
  @Authorized()
  @Mutation(_returns => Contract, {
    nullable: false,
    description: undefined
  })
  async upsertOneContract(@Ctx() ctx: any, @Args() args: UpsertOneContractArgs): Promise<Contract> {
    return ctx.prisma.contract.upsert(args);
  }
}
