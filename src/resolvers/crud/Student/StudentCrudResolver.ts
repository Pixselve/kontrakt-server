import * as TypeGraphQL from "type-graphql";
import { Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Student } from "../../models";
import { CreateOneStudentArgs, FindManyStudentArgs, FindOneStudentArgs, UpdateOneStudentArgs, } from "./args";
import { User } from "../../models/User";
import { Context } from "../../../index";

@Resolver((_of) => Student)
export class StudentCrudResolver {
  @TypeGraphQL.Query((_returns) => Student, {
    nullable: true,
    description: undefined,
  })
  async student(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOneStudentArgs
  ): Promise<Student | null> {
    return ctx.prisma.student.findOne(args);
  }

  @Authorized(["TEACHER", "STUDENT"])
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

  @Query((_returns) => [Student], {
    nullable: false,
  })
  async students(
    @Ctx() ctx: any,
    @Args() args: FindManyStudentArgs
  ): Promise<Student[]> {
    return ctx.prisma.student.findMany(args);
  }

  @Authorized("TEACHER")
  @Mutation((_returns) => Student, {
    nullable: false,
  })
  async createOneStudent(
    @Ctx() ctx: any,
    @Args() args: CreateOneStudentArgs
  ): Promise<Student> {
    return ctx.prisma.student.create(args);
  }

  @Authorized("TEACHER")
  @Mutation((_returns) => Student, {
    nullable: true,
  })
  async updateOneStudent(
    @Ctx() ctx: any,
    @Args() args: UpdateOneStudentArgs
  ): Promise<Student | null> {
    return ctx.prisma.student.update(args);
  }
}
