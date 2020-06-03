import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";

import { Student } from "../../../models";
import { Context } from "../../../index";
import { StudentCreateInput } from "../../inputs";

@Resolver((_of) => Student)
export class CreateStudentResolver {
  @Authorized("TEACHER")
  @Mutation((_returns) => Student, {
    nullable: false,
    description: undefined,
  })
  async createStudent(
    @Ctx() { prisma }: Context,
    @Arg("data") data: StudentCreateInput
  ): Promise<Student> {
    //  Generate a 6 digit username
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

    // @ts-ignore
    return prisma.student.create({ data: { ...data, username } });
  }
}

function generateSixDigitNumber(): number {
  return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
}
