import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateOneSkillArgs } from "./args/UpdateOneSkillArgs";
import { Skill } from "../../../models/Skill";

@Resolver(_of => Skill)
export class UpdateOneSkillResolver {
  @Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async updateOneSkill(@Ctx() ctx: any, @Args() args: UpdateOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.update(args);
  }
}
