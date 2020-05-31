import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Teacher } from "../../../models";
import { hash } from "bcryptjs";
import { Context } from "../../../index";
import { TeacherCreateInput } from "../../inputs/TeacherCreateInput";

@Resolver((_of) => Teacher)
export class CreateTeacherResolver {
  @Authorized("TEACHER")
  @Mutation((_returns) => Teacher)
  async createTeacher(
    @Ctx() { prisma }: Context,
    @Arg("data") { email, password }: TeacherCreateInput
  ): Promise<Teacher> {
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
