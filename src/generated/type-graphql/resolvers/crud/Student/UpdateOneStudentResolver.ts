import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateOneStudentArgs } from "./args/UpdateOneStudentArgs";
import { Student } from "../../../models/Student";

@Resolver(_of => Student)
export class UpdateOneStudentResolver {
  @Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async updateOneStudent(@Ctx() ctx: any, @Args() args: UpdateOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.update(args);
  }
}
