import * as TypeGraphQL from "type-graphql";
import { UpsertSkillArgs } from "./args/UpsertSkillArgs";
import { Skill } from "../../../models/Skill";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Skill)
export class UpsertSkillResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async upsertSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.upsert(args);
  }
}
