import * as TypeGraphQL from "type-graphql";
import { FindOneSkillArgs } from "./args/FindOneSkillArgs";
import { Skill } from "../../../models/Skill";

@TypeGraphQL.Resolver(_of => Skill)
export class FindOneSkillResolver {
  @TypeGraphQL.Query(_returns => Skill, {
    nullable: true,
    description: undefined
  })
  async skill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneSkillArgs): Promise<Skill | null | undefined> {
    return ctx.prisma.skill.findOne(args);
  }
}
