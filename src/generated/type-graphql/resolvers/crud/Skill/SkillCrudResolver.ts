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
}                              from "type-graphql";
import { CreateOneSkillArgs }  from "./args/CreateOneSkillArgs";
import { DeleteManySkillArgs } from "./args/DeleteManySkillArgs";
import { DeleteOneSkillArgs }  from "./args/DeleteOneSkillArgs";
import { FindManySkillArgs }   from "./args/FindManySkillArgs";
import { FindOneSkillArgs }    from "./args/FindOneSkillArgs";
import { UpdateManySkillArgs } from "./args/UpdateManySkillArgs";
import { UpdateOneSkillArgs }  from "./args/UpdateOneSkillArgs";
import { UpsertOneSkillArgs }  from "./args/UpsertOneSkillArgs";
import { Skill }               from "../../../models/Skill";
import { BatchPayload }        from "../../outputs/BatchPayload";

@Resolver(_of => Skill)
export class SkillCrudResolver {
  @Query(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async skill(@Ctx() ctx: any, @Args() args: FindOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.findOne(args);
  }

  @Query(_returns => [Skill], {
    nullable: false,
    description: undefined
  })
  async skills(@Ctx() ctx: any, @Args() args: FindManySkillArgs): Promise<Skill[]> {
    return ctx.prisma.skill.findMany(args);
  }

  @Authorized()
  @Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async createOneSkill(@Ctx() ctx: any, @Args() args: CreateOneSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.create(args);
  }

  @Authorized()
  @Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkill(@Ctx() ctx: any, @Args() args: DeleteOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.delete(args);
  }

  @Authorized()
  @Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async updateOneSkill(@Ctx() ctx: any, @Args() args: UpdateOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.update(args);
  }

  @Authorized()
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySkill(@Ctx() ctx: any, @Args() args: DeleteManySkillArgs): Promise<BatchPayload> {
    return ctx.prisma.skill.deleteMany(args);
  }

  @Authorized()
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySkill(@Ctx() ctx: any, @Args() args: UpdateManySkillArgs): Promise<BatchPayload> {
    return ctx.prisma.skill.updateMany(args);
  }

  @Authorized()
  @Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async upsertOneSkill(@Ctx() ctx: any, @Args() args: UpsertOneSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.upsert(args);
  }
}
