import { IsInt, IsPositive, Max, Min } from "class-validator";
import {
  Args,
  ArgsType,
  Ctx,
  Field,
  Int,
  Mutation,
  Resolver,
} from "type-graphql";
import { StudentAuthPayload } from "../../../models/AuthPayload";
import { Context } from "../../../index";
import { sign } from "jsonwebtoken";
import { AuthenticationError } from "apollo-server";

@ArgsType()
class StudentLoginArgs {
  @Field((type) => Int)
  @IsInt()
  @IsPositive()
  @Min(100000)
  @Max(999999)
  username?: number;
}

@Resolver()
export class LoginStudentResolver {
  @Mutation((returns) => StudentAuthPayload)
  async loginStudent(
    @Args() { username }: StudentLoginArgs,
    @Ctx() { prisma }: Context
  ): Promise<StudentAuthPayload> {
    const student = await prisma.student.findOne({ where: { username } });
    if (!student) throw new AuthenticationError("INVALID_USER");
    const token = sign(
      { type: "STUDENT", student: { id: student.id } },
      "Rne7p$Y*pK^GGJ4j@S7bWZ5y%"
    );
    return { token, student };
  }
}
