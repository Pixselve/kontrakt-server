import * as TypeGraphQL from "type-graphql";
import { CreateOneSkillArgs } from "./args/CreateOneSkillArgs";
import { DeleteManySkillArgs } from "./args/DeleteManySkillArgs";
import { DeleteOneSkillArgs } from "./args/DeleteOneSkillArgs";
import { FindManySkillArgs } from "./args/FindManySkillArgs";
import { FindOneSkillArgs } from "./args/FindOneSkillArgs";
import { UpdateManySkillArgs } from "./args/UpdateManySkillArgs";
import { UpdateOneSkillArgs } from "./args/UpdateOneSkillArgs";
import { UpsertOneSkillArgs } from "./args/UpsertOneSkillArgs";
import { Skill } from "../../../models/Skill";
import { AggregateSkill } from "../../outputs/AggregateSkill";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Skill)
export class SkillCrudResolver {
  @TypeGraphQL.Query(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async skill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Skill], {
    nullable: false,
    description: undefined
  })
  async skills(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySkillArgs): Promise<Skill[]> {
    return ctx.prisma.skill.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async createOneSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async updateOneSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySkillArgs): Promise<BatchPayload> {
    return ctx.prisma.skill.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySkillArgs): Promise<BatchPayload> {
    return ctx.prisma.skill.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async upsertOneSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateSkill, {
    nullable: false,
    description: undefined
  })
  async aggregateSkill(): Promise<AggregateSkill> {
    return new AggregateSkill();
  }
}
