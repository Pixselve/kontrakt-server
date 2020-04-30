import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Context }                                  from "../../../index";
import { EditOrCreateSkillToStudentInput }          from "../../inputs/EditOrCreateSkillToStudentInput";
import { SkillToStudent }                           from "../../models";

@Resolver()
export class EditOrCreateSkillToStudent {
  @Authorized("TEACHER")
  @Mutation(returns => SkillToStudent)
  async editOrCreateSkillToStudent(@Arg("data") { mark, student, skill }: EditOrCreateSkillToStudentInput, @Ctx() { prisma }: Context): Promise<SkillToStudent> {
    const skillToStudentAlreadyExists: Array<SkillToStudent> = await prisma.skillToStudent.findMany({
      where: {
        student: { id: student.id },
        skill: { id: skill.id }
      }
    });

    if (skillToStudentAlreadyExists.length > 0) {
      return prisma.skillToStudent.update({
        where: {
          id: skillToStudentAlreadyExists[0].id
        },
        data: {
          mark
        }
      });
    } else {
      return prisma.skillToStudent.create({
        data: {
          mark,
          skill: {
            connect: {
              id: skill.id
            }
          },
          student: {
            connect: {
              id: student.id
            }
          }
        }
      });
    }

  }
}