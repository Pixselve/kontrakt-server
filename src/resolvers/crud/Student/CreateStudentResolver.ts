import { Args, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { CreateStudentArgs } from "./args/CreateStudentArgs";
import { Student } from "../../../models";
import { Context } from "../../../index";

@Resolver((_of) => Student)
export class CreateStudentResolver {
  @Authorized("TEACHER")
  @Mutation((_returns) => Student, {
    nullable: false,
    description: undefined,
  })
  async createStudent(
    @Ctx() { prisma }: Context,
    @Args() { data }: CreateStudentArgs
  ): Promise<Student> {
    //  Generate a 6 digit username
    let username = generateSixDigitNumber();
    let i = 0;
    while (
      (await prisma.student.findMany({ where: { username } })).length > 0 && i < 10
      ) {
      username = generateSixDigitNumber();
      i++;
    }
    if (i >= 10) throw new Error("UsernameRangeExceeded")

    // @ts-ignore
    return prisma.student.create({ data: { ...data, username } });
  }
}

function generateSixDigitNumber(): number {
  return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
}
