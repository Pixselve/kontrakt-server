import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Context }                                  from "../../index";
import { TeacherCreateInputCustom } from "../inputs/TeacherCreateInputCustom";
import { Student }        from "../../generated/type-graphql/models";
import { DeleteStudentInput }       from "../inputs/DeleteStudentInput";

@Resolver()
export class DeleteStudent {
  @Authorized("TEACHER")
  @Mutation(returns => Student)
  async deleteStudent(@Arg("data") { id }: DeleteStudentInput, @Ctx() { prisma }: Context): Promise<Student> {
    const student = await prisma.student.findOne({ where: { id } });
    if (!student) throw new Error("StudentNotFound");
    await prisma.skillToStudent.deleteMany({
      where: {
        student: {
          id: student.id
        }
      }
    });
    return prisma.student.delete({ where: { id: student.id } });
  }
}