import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Skill } from "../../../models/Skill";
import { CreateSkillArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Skill)
export class CreateSkillResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Skill, {
    nullable: false,
    description: undefined,
  })
  async createSkill(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: CreateSkillArgs
  ): Promise<Skill> {
    return ctx.prisma.skill.create(args);
  }
}
