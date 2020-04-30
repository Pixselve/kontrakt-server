import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Context }                      from "../../../index";
import { AuthPayload }                  from "../../models";
import { sign }                         from "jsonwebtoken";
import { compare }                      from "bcryptjs";
import { LoginTeacherInput }            from "../../inputs/LoginTeacherInput";
import { AuthenticationError }          from 'apollo-server';

@Resolver()
export class LoginTeacher {
  @Mutation(returns => AuthPayload)
  async loginTeacher(@Arg("data") { email, password }: LoginTeacherInput, @Ctx() { prisma }: Context): Promise<AuthPayload> {
    const teacher = await prisma.teacher.findOne({ where: { email } });
    if (!teacher) throw new AuthenticationError("INVALID_USER");
    if (await compare(password, teacher.password)) {
      // TODO - Replace key
      const token = sign({ email: teacher.email }, "Rne7p$Y*pK^GGJ4j@S7bWZ5y%");
      return { token, teacher };
    } else {
      throw new AuthenticationError("INVALID_PASSWORD");
    }

  }
}