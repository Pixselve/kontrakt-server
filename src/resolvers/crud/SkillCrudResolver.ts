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
}                from "type-graphql";
import { Skill } from "../../generated/type-graphql/models";
import {
  CreateOneSkillArgs, DeleteOneSkillArgs,
  FindManySkillArgs,
  FindOneSkillArgs, UpdateOneSkillArgs
}                from "../../generated/type-graphql/resolvers/crud/Skill/args";

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

  @Authorized("TEACHER")
  @Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async createOneSkill(@Ctx() ctx: any, @Args() args: CreateOneSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.create(args);
  }

  @Authorized("TEACHER")
  @Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkill(@Ctx() ctx: any, @Args() args: DeleteOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.delete(args);
  }

  @Authorized("TEACHER")
  @Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async updateOneSkill(@Ctx() ctx: any, @Args() args: UpdateOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.update(args);
  }
}
