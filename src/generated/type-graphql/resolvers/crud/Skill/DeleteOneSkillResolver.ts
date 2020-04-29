import * as TypeGraphQL from "type-graphql";
import { DeleteOneSkillArgs } from "./args/DeleteOneSkillArgs";
import { Skill } from "../../../models/Skill";

@TypeGraphQL.Resolver(_of => Skill)
export class DeleteOneSkillResolver {
  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneSkillArgs): Promise<Skill | null> {
    return ctx.prisma.skill.delete(args);
  }
}
