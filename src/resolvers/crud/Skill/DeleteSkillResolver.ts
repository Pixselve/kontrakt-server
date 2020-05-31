import * as TypeGraphQL from "type-graphql";
import { DeleteSkillArgs } from "./args/DeleteSkillArgs";
import { Skill } from "../../../models/Skill";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Skill)
export class DeleteSkillResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async deleteSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSkillArgs): Promise<Skill | null | undefined> {
    return ctx.prisma.skill.delete(args);
  }
}
