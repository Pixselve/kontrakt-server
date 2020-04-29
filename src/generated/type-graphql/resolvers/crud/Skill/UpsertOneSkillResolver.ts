import * as TypeGraphQL from "type-graphql";
import { UpsertOneSkillArgs } from "./args/UpsertOneSkillArgs";
import { Skill } from "../../../models/Skill";

@TypeGraphQL.Resolver(_of => Skill)
export class UpsertOneSkillResolver {
  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async upsertOneSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.upsert(args);
  }
}
