import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Student } from "../../models/Student";
import { Context } from "../../index";
import { CreateOneStudentInput } from "./input/CreateOneStudent.input";

@Resolver(Student)
export default class CreateOneStudentResolver {
  @Mutation((returns) => Student)
  @Authorized("TEACHER")
  async createOneStudent(
    @Ctx() { prisma }: Context,
    @Arg("student") { firstName, lastName, groupIds }: CreateOneStudentInput
  ) {
    //  Generate a 6 digits username
    let username = generateSixDigitNumber();
    let i = 0;
    while (
      (await prisma.student.findMany({ where: { username } })).length > 0 &&
      i < 10
      ) {
      username = generateSixDigitNumber();
      i++;
    }
    if (i >= 10) throw new Error("UsernameRangeExceeded");

    return prisma.student.create({
      data: {
        username,
        firstName,
        lastName,
        groups: { connect: groupIds.map((groupId) => ({ id: groupId })) },
      },
    });
  }
}

function generateSixDigitNumber(): number {
  return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
}
