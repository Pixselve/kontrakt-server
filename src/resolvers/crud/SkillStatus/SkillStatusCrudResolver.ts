import * as TypeGraphQL from "type-graphql";
import { SkillStatus }  from "../../models";
import {
  CreateOneSkillStatusArgs,
  DeleteOneSkillStatusArgs,
  FindManySkillStatusArgs,
  FindOneSkillStatusArgs,
  UpdateOneSkillStatusArgs
}                       from "./args";


@TypeGraphQL.Resolver(_of => SkillStatus)
export class SkillStatusCrudResolver {
  @TypeGraphQL.Query(_returns => SkillStatus, {
    nullable: true,
    description: undefined
  })
  async skillStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneSkillStatusArgs): Promise<SkillStatus | null> {
    return ctx.prisma.skillStatus.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [SkillStatus], {
    nullable: false,
    description: undefined
  })
  async skillStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySkillStatusArgs): Promise<SkillStatus[]> {
    return ctx.prisma.skillStatus.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SkillStatus, {
    nullable: false,
    description: undefined
  })
  async createOneSkillStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneSkillStatusArgs): Promise<SkillStatus> {
    return ctx.prisma.skillStatus.create(args);
  }

  @TypeGraphQL.Mutation(_returns => SkillStatus, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkillStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneSkillStatusArgs): Promise<SkillStatus | null> {
    return ctx.prisma.skillStatus.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => SkillStatus, {
    nullable: true,
    description: undefined
  })
  async updateOneSkillStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneSkillStatusArgs): Promise<SkillStatus | null> {
    return ctx.prisma.skillStatus.update(args);
  }
}
