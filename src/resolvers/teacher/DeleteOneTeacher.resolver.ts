import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Teacher } from "../../models/Teacher";
import { Context } from "../../index";

@Resolver(Teacher)
export default class DeleteOneTeacherResolver {
  @Mutation((returns) => Teacher)
  @Authorized("TEACHER")
  deleteOneTeacher(@Ctx() { prisma }: Context, @Arg("email") email: string) {
    return prisma.teacher.delete({ where: { email } });
  }
}
