import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { Skill } from "../../models/Skill";
import { Context } from "../../index";
import { UpdateOneSkillInput } from "./input/UpdateOneSkill.input";

@Resolver(Skill)
export default class UpdateOneSkillResolver {
  @Mutation((returns) => Skill)
  @Authorized("TEACHER")
  async updateOneSkill(
    @Ctx() { prisma }: Context,
    @Arg("id", (returns) => Int) id: number,
    @Arg("skill") { name }: UpdateOneSkillInput
  ) {
    return prisma.skill.update({ where: { id }, data: { name } });
  }
}
