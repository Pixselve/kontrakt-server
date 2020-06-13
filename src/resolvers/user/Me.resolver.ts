import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../../index";
import { UserUnion } from "../../unions/User.union";

@Resolver()
export default class MeResolver {
  @Query((returns) => UserUnion)
  async me(@Ctx() { prisma, user }: Context) {
    if (user.type === "TEACHER") {
      //  The user is a teacher
      return (
        (await prisma.teacher.findOne({
          where: { email: user.teacher?.email },
        })) ?? undefined
      );
    } else {
      //  The user is a student
      return (
        (await prisma.student.findOne({ where: { id: user.student?.id } })) ??
        undefined
      );
    }
  }
}
