import * as TypeGraphQL from "type-graphql";
import { CreateOneContractArgs } from "./args/CreateOneContractArgs";
import { DeleteManyContractArgs } from "./args/DeleteManyContractArgs";
import { DeleteOneContractArgs } from "./args/DeleteOneContractArgs";
import { FindManyContractArgs } from "./args/FindManyContractArgs";
import { FindOneContractArgs } from "./args/FindOneContractArgs";
import { UpdateManyContractArgs } from "./args/UpdateManyContractArgs";
import { UpdateOneContractArgs } from "./args/UpdateOneContractArgs";
import { UpsertOneContractArgs } from "./args/UpsertOneContractArgs";
import { Contract } from "../../../models/Contract";
import { AggregateContract } from "../../outputs/AggregateContract";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Contract)
export class ContractCrudResolver {
  @TypeGraphQL.Query(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async contract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Contract], {
    nullable: false,
    description: undefined
  })
  async contracts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyContractArgs): Promise<Contract[]> {
    return ctx.prisma.contract.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Contract, {
    nullable: false,
    description: undefined
  })
  async createOneContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneContractArgs): Promise<Contract> {
    return ctx.prisma.contract.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async deleteOneContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Contract, {
    nullable: true,
    description: undefined
  })
  async updateOneContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneContractArgs): Promise<Contract | null> {
    return ctx.prisma.contract.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyContractArgs): Promise<BatchPayload> {
    return ctx.prisma.contract.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyContractArgs): Promise<BatchPayload> {
    return ctx.prisma.contract.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Contract, {
    nullable: false,
    description: undefined
  })
  async upsertOneContract(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneContractArgs): Promise<Contract> {
    return ctx.prisma.contract.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateContract, {
    nullable: false,
    description: undefined
  })
  async aggregateContract(): Promise<AggregateContract> {
    return new AggregateContract();
  }
}
