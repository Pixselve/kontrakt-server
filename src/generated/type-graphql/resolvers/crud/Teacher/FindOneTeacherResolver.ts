import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindOneTeacherArgs } from "./args/FindOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@Resolver(_of => Teacher)
export class FindOneTeacherResolver {
  @Query(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async teacher(@Ctx() ctx: any, @Args() args: FindOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.findOne(args);
  }
}
