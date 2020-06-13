import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { Skill } from "../../models/Skill";
import { Context } from "../../index";

@Resolver(Skill)
export default class DeleteOneSkillResolver {
  @Mutation((returns) => Skill)
  @Authorized("TEACHER")
  async deleteOneSkill(
    @Ctx() { prisma }: Context,
    @Arg("id", (returns) => Int) id: number
  ) {
    return prisma.skill.delete({ where: { id } });
  }
}
