import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindManySkillArgs } from "./args/FindManySkillArgs";
import { Skill } from "../../../models/Skill";

@Resolver(_of => Skill)
export class FindManySkillResolver {
  @Query(_returns => [Skill], {
    nullable: false,
    description: undefined
  })
  async skills(@Ctx() ctx: any, @Args() args: FindManySkillArgs): Promise<Skill[]> {
    return ctx.prisma.skill.findMany(args);
  }
}
