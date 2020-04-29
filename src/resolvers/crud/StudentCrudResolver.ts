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
}                       from "type-graphql";
import { Student }      from "../../generated/type-graphql/models";
import {
  CreateOneStudentArgs, DeleteOneStudentArgs,
  FindManyStudentArgs,
  FindOneStudentArgs, UpdateOneStudentArgs
}                       from "../../generated/type-graphql/resolvers/crud/Student/args";
import * as TypeGraphQL from "type-graphql";

@Resolver(_of => Student)
export class StudentCrudResolver {
  @TypeGraphQL.Query(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async student(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStudentArgs): Promise<Student | null> {
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
  async updateOneStudent(@Ctx() ctx: any, @Args() args: UpdateOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.update(args);
  }
}
