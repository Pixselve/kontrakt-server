import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Skill } from "../../../models/Skill";
import { DeleteSkillArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Skill)
export class DeleteSkillResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Skill, {
    nullable: true,
    description: undefined,
  })
  async deleteSkill(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteSkillArgs
  ): Promise<Skill | null | undefined> {
    return ctx.prisma.skill.delete(args);
  }
}
