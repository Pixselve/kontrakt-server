import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindManyStudentArgs } from "./args/FindManyStudentArgs";
import { Student } from "../../../models/Student";

@Resolver(_of => Student)
export class FindManyStudentResolver {
  @Query(_returns => [Student], {
    nullable: false,
    description: undefined
  })
  async students(@Ctx() ctx: any, @Args() args: FindManyStudentArgs): Promise<Student[]> {
    return ctx.prisma.student.findMany(args);
  }
}
