import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpsertOneSkillArgs } from "./args/UpsertOneSkillArgs";
import { Skill } from "../../../models/Skill";

@Resolver(_of => Skill)
export class UpsertOneSkillResolver {
  @Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async upsertOneSkill(@Ctx() ctx: any, @Args() args: UpsertOneSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.upsert(args);
  }
}
