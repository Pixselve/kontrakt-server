import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { AuthPayload } from "../../../models";
import { Context } from "../../../index";
import { AuthenticationError } from "apollo-server";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { CreateTeacherArgs } from "./args";

@Resolver()
export class LoginTeacherResolver {
  @Mutation((returns) => AuthPayload)
  async loginTeacher(
    @Args() { data: { password, email } }: CreateTeacherArgs,
    @Ctx() { prisma }: Context
  ): Promise<AuthPayload> {
    const teacher = await prisma.teacher.findOne({ where: { email } });
    if (!teacher) throw new AuthenticationError("INVALID_USER");
    if (await compare(password, teacher.password)) {
      // TODO - Replace key
      const token = sign(
        { type: "TEACHER", teacher: { email: teacher.email } },
        "Rne7p$Y*pK^GGJ4j@S7bWZ5y%"
      );
      return { token, teacher };
    } else {
      throw new AuthenticationError("INVALID_PASSWORD");
    }
  }
}
