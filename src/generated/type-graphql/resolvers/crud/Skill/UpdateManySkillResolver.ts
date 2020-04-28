import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateManySkillArgs } from "./args/UpdateManySkillArgs";
import { Skill } from "../../../models/Skill";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Skill)
export class UpdateManySkillResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySkill(@Ctx() ctx: any, @Args() args: UpdateManySkillArgs): Promise<BatchPayload> {
    return ctx.prisma.skill.updateMany(args);
  }
}
