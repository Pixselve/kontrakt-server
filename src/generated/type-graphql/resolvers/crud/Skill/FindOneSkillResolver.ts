import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindOneSkillArgs } from "./args/FindOneSkillArgs";
import { Skill } from "../../../models/Skill";

@Resolver(_of => Skill)
export class FindOneSkillResolver {
  @Query(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async skill(@Ctx() ctx: any, @Args() args: FindOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.findOne(args);
  }
}
