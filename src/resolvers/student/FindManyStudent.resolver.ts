import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../../index";
import { Student } from "../../models/Student";

@Resolver(Student)
export default class FindManyStudentResolver {
  @Query((returns) => [Student])
  students(@Ctx() { prisma }: Context) {
    return prisma.student.findMany();
  }
}
