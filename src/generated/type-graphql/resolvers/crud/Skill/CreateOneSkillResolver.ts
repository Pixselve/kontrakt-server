import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneSkillArgs } from "./args/CreateOneSkillArgs";
import { Skill } from "../../../models/Skill";

@Resolver(_of => Skill)
export class CreateOneSkillResolver {
  @Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async createOneSkill(@Ctx() ctx: any, @Args() args: CreateOneSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.create(args);
  }
}
