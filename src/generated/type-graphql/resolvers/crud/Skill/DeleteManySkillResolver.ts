import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteManySkillArgs } from "./args/DeleteManySkillArgs";
import { Skill } from "../../../models/Skill";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Skill)
export class DeleteManySkillResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySkill(@Ctx() ctx: any, @Args() args: DeleteManySkillArgs): Promise<BatchPayload> {
    return ctx.prisma.skill.deleteMany(args);
  }
}
