import * as TypeGraphQL from "type-graphql";
import { CreateOneSkillArgs } from "./args/CreateOneSkillArgs";
import { Skill } from "../../../models/Skill";

@TypeGraphQL.Resolver(_of => Skill)
export class CreateOneSkillResolver {
  @TypeGraphQL.Mutation(_returns => Skill, {
    nullable: false,
    description: undefined
  })
  async createOneSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneSkillArgs): Promise<Skill> {
    return ctx.prisma.skill.create(args);
  }
}
