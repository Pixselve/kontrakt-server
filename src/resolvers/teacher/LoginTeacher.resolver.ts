import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { AuthenticationError } from "apollo-server";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AuthPayloadTeacher } from "../../models/AuthPayload";
import { Context } from "../../index";
import { CreateOneTeacherInput } from "./input/CreateOneTeacherInput";

@Resolver()
export default class LoginTeacherResolver {
  @Mutation((returns) => AuthPayloadTeacher)
  async loginTeacher(
    @Arg("teacher") { email, password }: CreateOneTeacherInput,
    @Ctx() { prisma }: Context
  ) {
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
