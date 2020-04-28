import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Context }                                  from "../../index";
import { CreateStudentInput }           from "../inputs/CreateStudentInput";

@Resolver()

export class CheckIsStudentExists {
  @Mutation(returns => Boolean)
  async checkIsStudentExists(@Arg("id") id: number, @Ctx() { prisma }: Context): Promise<Boolean> {
    const students = await prisma.student.findMany({ where: { id } });
    return students.length > 0;
  }
}