import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteOneStudentArgs } from "./args/DeleteOneStudentArgs";
import { Student } from "../../../models/Student";

@Resolver(_of => Student)
export class DeleteOneStudentResolver {
  @Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async deleteOneStudent(@Ctx() ctx: any, @Args() args: DeleteOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.delete(args);
  }
}
