import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";
import { Student } from "../../models/Student";
import { Context } from "../../index";

@Resolver(Student)
export default class FindOneStudentResolver {
  @Query((returns) => Student)
  async student(
    @Ctx() { prisma }: Context,
    @Arg("id", (returns) => Int) id: number
  ) {
    return prisma.student.findOne({ where: { id } });
  }
}
