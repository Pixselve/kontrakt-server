import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Skill } from "../../../models/Skill";
import { UpdateSkillArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Skill)
export class UpdateSkillResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Skill, {
    nullable: true,
    description: undefined,
  })
  async updateSkill(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateSkillArgs
  ): Promise<Skill | null | undefined> {
    return ctx.prisma.skill.update(args);
  }
}
