import * as TypeGraphQL from "type-graphql";
import { FindManySkillArgs } from "./args/FindManySkillArgs";
import { Skill } from "../../../models/Skill";

@TypeGraphQL.Resolver(_of => Skill)
export class FindManySkillResolver {
  @TypeGraphQL.Query(_returns => [Skill], {
    nullable: false,
    description: undefined
  })
  async skills(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySkillArgs): Promise<Skill[]> {
    return ctx.prisma.skill.findMany(args);
  }
}
