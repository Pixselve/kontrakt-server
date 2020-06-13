import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Teacher } from "../../models/Teacher";
import { Context } from "../../index";
import { CreateOneTeacherInput } from "./input/CreateOneTeacherInput";
import { hash } from "bcryptjs";

@Resolver(Teacher)
export default class CreateOneTeacherResolver {
  @Mutation((returns) => Teacher)
  @Authorized("TEACHER")
  async createOneTeacher(
    @Ctx() { prisma }: Context,
    @Arg("teacher") { email, password }: CreateOneTeacherInput
  ) {
    if ((await prisma.teacher.findMany({ where: { email: email } })).length > 0)
      throw new Error("Teacher already exists");
    const hashedPassword = await hash(password, 10);
    return await prisma.teacher.create({
      data: {
        password: hashedPassword,
        email: email,
      },
    });
  }
}
