import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneTeacherArgs } from "./args/CreateOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@Resolver(_of => Teacher)
export class CreateOneTeacherResolver {
  @Mutation(_returns => Teacher, {
    nullable: false,
    description: undefined
  })
  async createOneTeacher(@Ctx() ctx: any, @Args() args: CreateOneTeacherArgs): Promise<Teacher> {
    return ctx.prisma.teacher.create(args);
  }
}
