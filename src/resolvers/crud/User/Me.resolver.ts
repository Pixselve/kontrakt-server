import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../../../models/User";
import { Context } from "../../../index";

@Resolver(of => User)
export class MeResolver {
  @Query((_returns) => User)
  async me(@Ctx() ctx: Context): Promise<User> {
    if (ctx.user.type === "TEACHER") {
      //  The user is a teacher
      return { teacher: (await ctx.prisma.teacher.findOne({ where: { email: ctx.user.teacher?.email } })) ?? undefined };
    } else {
      //  The user is a student
      return { student: (await ctx.prisma.student.findOne({ where: { id: ctx.user.student?.id } })) ?? undefined };
    }
  }
}
