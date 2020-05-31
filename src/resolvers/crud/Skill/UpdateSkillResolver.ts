import * as TypeGraphQL from "type-graphql";
import { UpdateSkillArgs } from "./args/UpdateSkillArgs";
import { Skill } from "../../../models/Skill";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Skill)
export class UpdateSkillResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async updateSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSkillArgs): Promise<Skill | null | undefined> {
    return ctx.prisma.skill.update(args);
  }
}
