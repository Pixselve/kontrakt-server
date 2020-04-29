import * as TypeGraphQL from "type-graphql";
import { UpdateManySkillArgs } from "./args/UpdateManySkillArgs";
import { Skill } from "../../../models/Skill";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Skill)
export class UpdateManySkillResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySkillArgs): Promise<BatchPayload> {
    return ctx.prisma.skill.updateMany(args);
  }
}
