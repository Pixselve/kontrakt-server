import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { Contract } from "../../models/Contract";
import { Context } from "../../index";

@Resolver(Contract)
export default class DeleteOneContractResolver {
  @Mutation((returns) => Contract)
  @Authorized("TEACHER")
  async deleteOneContract(
    @Ctx() { prisma }: Context,
    @Arg("id", (returns) => Int) id: number
  ) {
    // Delete SkillToStudent
    const contract = await prisma.contract.findOne({
      where: { id },
      include: { skills: { include: { skillToStudents: true } } },
    });
    if (!contract) throw new Error("Contract not found");
    await Promise.all(
      contract.skills
        .map((skill) =>
          skill.skillToStudents
            .map((skillToStudent) =>
              prisma.skillToStudent.delete({
                where: {
                  studentId_skillId: {
                    studentId: skillToStudent.studentId,
                    skillId: skillToStudent.skillId,
                  },
                },
              })
            )
            .flat()
        )
        .flat()
    );
    await Promise.all(
      contract.skills.map((skill) =>
        prisma.skill.delete({ where: { id: skill.id } })
      )
    );
    return prisma.contract.delete({ where: { id } });
  }
}
