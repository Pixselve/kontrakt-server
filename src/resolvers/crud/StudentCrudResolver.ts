import {
  Arg,
  Args,
  ArgsType,
  Ctx,
  Field,
  FieldResolver,
  Float,
  ID,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  registerEnumType, Authorized
}                  from "type-graphql";
import { Student } from "../../generated/type-graphql/models";
import {
  CreateOneStudentArgs, DeleteOneStudentArgs,
  FindManyStudentArgs,
  FindOneStudentArgs, UpdateOneStudentArgs
}                  from "../../generated/type-graphql/resolvers/crud/Student/args";

@Resolver(_of => Student)
export class StudentCrudResolver {
  @Query(_returns => Student, {
    nullable: true,
  })
  async student(@Ctx() ctx: any, @Args() args: FindOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.findOne(args);
  }

  @Query(_returns => [Student], {
    nullable: false,
  })
  async students(@Ctx() ctx: any, @Args() args: FindManyStudentArgs): Promise<Student[]> {
    return ctx.prisma.student.findMany(args);
  }

  @Authorized("TEACHER")
  @Mutation(_returns => Student, {
    nullable: false,
  })
  async createOneStudent(@Ctx() ctx: any, @Args() args: CreateOneStudentArgs): Promise<Student> {
    return ctx.prisma.student.create(args);
  }

  @Authorized("TEACHER")
  @Mutation(_returns => Student, {
    nullable: true,
  })
  async deleteOneStudent(@Ctx() ctx: any, @Args() args: DeleteOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.delete(args);
  }

  @Authorized("TEACHER")
  @Mutation(_returns => Student, {
    nullable: true,
  })
  async updateOneStudent(@Ctx() ctx: any, @Args() args: UpdateOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.update(args);
  }
}
