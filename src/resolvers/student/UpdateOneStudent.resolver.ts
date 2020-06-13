import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { Student } from "../../models/Student";
import { Context } from "../../index";
import { UpdateOneStudentInput } from "./input/UpdateOneStudent.input";

@Resolver(Student)
export default class UpdateOneStudentResolver {
  @Mutation((returns) => Student)
  @Authorized("TEACHER")
  async updateOneStudent(
    @Ctx() { prisma }: Context,
    @Arg("id", returns => Int) id: number,
    @Arg("student") { firstName, lastName, groupIds }: UpdateOneStudentInput
  ) {
    return prisma.student.update({
      where: { id },
      data: {
        firstName,
        lastName,
        groups: {
          set: groupIds?.map((groupId) => ({ id: groupId })) ?? undefined,
        },
      },
    });
  }
}
