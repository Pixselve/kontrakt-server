import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteOneTeacherArgs } from "./args/DeleteOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@Resolver(_of => Teacher)
export class DeleteOneTeacherResolver {
  @Mutation(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async deleteOneTeacher(@Ctx() ctx: any, @Args() args: DeleteOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.delete(args);
  }
}
