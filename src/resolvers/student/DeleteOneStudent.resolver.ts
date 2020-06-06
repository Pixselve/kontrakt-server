import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { Student } from "../../models/Student";
import { Context } from "../../index";

@Resolver(Student)
export default class DeleteOneStudentResolver {
  @Mutation((returns) => Student)
  @Authorized("TEACHER")
  async deleteOneStudent(
    @Ctx() { prisma }: Context,
    @Arg("id", (returns) => Int) id: number
  ) {
    return prisma.student.delete({ where: { id } });
  }
}
