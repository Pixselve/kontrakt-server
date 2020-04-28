import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneStudentArgs } from "./args/CreateOneStudentArgs";
import { Student } from "../../../models/Student";

@Resolver(_of => Student)
export class CreateOneStudentResolver {
  @Mutation(_returns => Student, {
    nullable: false,
    description: undefined
  })
  async createOneStudent(@Ctx() ctx: any, @Args() args: CreateOneStudentArgs): Promise<Student> {
    return ctx.prisma.student.create(args);
  }
}
