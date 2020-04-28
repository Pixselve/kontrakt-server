import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindOneStudentArgs } from "./args/FindOneStudentArgs";
import { Student } from "../../../models/Student";

@Resolver(_of => Student)
export class FindOneStudentResolver {
  @Query(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async student(@Ctx() ctx: any, @Args() args: FindOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.findOne(args);
  }
}
