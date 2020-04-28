import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpsertOneTeacherArgs } from "./args/UpsertOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@Resolver(_of => Teacher)
export class UpsertOneTeacherResolver {
  @Mutation(_returns => Teacher, {
    nullable: false,
    description: undefined
  })
  async upsertOneTeacher(@Ctx() ctx: any, @Args() args: UpsertOneTeacherArgs): Promise<Teacher> {
    return ctx.prisma.teacher.upsert(args);
  }
}
