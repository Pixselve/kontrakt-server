import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteOneSkillArgs } from "./args/DeleteOneSkillArgs";
import { Skill } from "../../../models/Skill";

@Resolver(_of => Skill)
export class DeleteOneSkillResolver {
  @Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkill(@Ctx() ctx: any, @Args() args: DeleteOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.delete(args);
  }
}
