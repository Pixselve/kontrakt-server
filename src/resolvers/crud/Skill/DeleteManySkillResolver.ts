import * as TypeGraphQL from "type-graphql";
import { DeleteManySkillArgs } from "./args/DeleteManySkillArgs";
import { Skill } from "../../../models/Skill";
import { BatchPayload } from "../../outputs/BatchPayload";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Skill)
export class DeleteManySkillResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySkillArgs): Promise<BatchPayload> {
    return ctx.prisma.skill.deleteMany(args);
  }
}
