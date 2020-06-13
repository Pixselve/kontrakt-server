import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Student } from "../../models/Student";
import { Context } from "../../index";
import { LoginStudentInput } from "./input/LoginStudent.input";
import { AuthPayloadStudent } from "../../models/AuthPayload";
import { AuthenticationError } from "apollo-server";
import { sign } from "jsonwebtoken";

@Resolver(Student)
export default class LoginStudentResolver {
  @Mutation((returns) => AuthPayloadStudent)
  async loginStudent(
    @Ctx() { prisma }: Context,
    @Arg("student") { username }: LoginStudentInput
  ) {
    const student = await prisma.student.findOne({ where: { username } });
    if (!student) throw new AuthenticationError("INVALID_USER");
    const token = sign(
      { type: "STUDENT", student: { id: student.id } },
      "Rne7p$Y*pK^GGJ4j@S7bWZ5y%"
    );
    return { token, student };
  }
}
