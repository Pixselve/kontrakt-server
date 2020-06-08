import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../../index";
import { Skill } from "../../models/Skill";
import { CreateOneSkillInput } from "./input/CreateOneSkill.input";

@Resolver(Skill)
export default class CreateOneSkillResolver {
  @Mutation((returns) => Skill)
  @Authorized("TEACHER")
  async createOneSkill(
    @Ctx() { prisma }: Context,
    @Arg("skill") { contractId, name }: CreateOneSkillInput
  ) {
    return prisma.skill.create({
      data: { name, contract: { connect: { id: contractId } } },
    });
  }
}
