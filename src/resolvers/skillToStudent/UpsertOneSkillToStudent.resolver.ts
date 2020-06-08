import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { Student } from "../../models/Student";
import { Context } from "../../index";
import { UpsertOneSkillToStudentInput } from "./input/UpsertOneSkillToStudent.input";
import { SkillToStudent } from "../../models/SkillToStudent";

@Resolver(SkillToStudent)
export default class UpsertOneSkillToStudentResolver {
  @Mutation((returns) => SkillToStudent)
  @Authorized("TEACHER")
  async upsertOneSkillToStudent(
    @Ctx() { prisma }: Context,
    @Arg("skillToStudent")
    { studentId, markValue, skillId }: UpsertOneSkillToStudentInput
  ) {
    return prisma.skillToStudent.upsert({
      where: {
        studentId_skillId: {
          studentId,
          skillId,
        },
      },
      update: {
        mark: {
          connect: {
            value: markValue,
          },
        },
      },
      create: {
        skill: {
          connect: {
            id: skillId,
          },
        },
        student: {
          connect: {
            id: studentId,
          },
        },
        mark: {
          connect: {
            value: markValue,
          },
        },
      },
    });
  }
}
