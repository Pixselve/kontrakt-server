import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Context }                                  from "../../../index";
import { hash }                                     from "bcryptjs";
import { TeacherCreateInputCustom }                 from "../../inputs/TeacherCreateInputCustom";
import { AuthPayload }                              from "../../models";
import { sign }                                     from "jsonwebtoken";

@Resolver()
export class CreateOneTeacher {
  @Authorized("TEACHER")
  @Mutation(returns => AuthPayload)
  async createTeacher(@Arg("data") newTeacherData: TeacherCreateInputCustom, @Ctx() { prisma }: Context): Promise<AuthPayload> {
    if ((await prisma.teacher.findMany({ where: { email: newTeacherData.email } })).length > 0) throw new Error("Teacher already exists");
    const hashedPassword = await hash(newTeacherData.password, 10);
    const teacher = await prisma.teacher.create({
      data: {
        password: hashedPassword,
        email: newTeacherData.email
      }
    });
    // TODO - Replace key
    const token = sign({ teacher }, "key");

    return { token, teacher };
  }
}