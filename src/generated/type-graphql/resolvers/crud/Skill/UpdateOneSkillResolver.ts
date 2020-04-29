import * as TypeGraphQL from "type-graphql";
import { UpdateOneSkillArgs } from "./args/UpdateOneSkillArgs";
import { Skill } from "../../../models/Skill";

@TypeGraphQL.Resolver(_of => Skill)
export class UpdateOneSkillResolver {
  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async updateOneSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.update(args);
  }
}
