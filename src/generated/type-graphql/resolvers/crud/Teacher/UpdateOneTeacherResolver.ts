import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateOneTeacherArgs } from "./args/UpdateOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@Resolver(_of => Teacher)
export class UpdateOneTeacherResolver {
  @Mutation(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async updateOneTeacher(@Ctx() ctx: any, @Args() args: UpdateOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.update(args);
  }
}
