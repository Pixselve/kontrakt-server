import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpsertOneStudentArgs } from "./args/UpsertOneStudentArgs";
import { Student } from "../../../models/Student";

@Resolver(_of => Student)
export class UpsertOneStudentResolver {
  @Mutation(_returns => Student, {
    nullable: false,
    description: undefined
  })
  async upsertOneStudent(@Ctx() ctx: any, @Args() args: UpsertOneStudentArgs): Promise<Student> {
    return ctx.prisma.student.upsert(args);
  }
}
