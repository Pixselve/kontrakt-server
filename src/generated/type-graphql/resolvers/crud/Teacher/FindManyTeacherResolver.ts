import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindManyTeacherArgs } from "./args/FindManyTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@Resolver(_of => Teacher)
export class FindManyTeacherResolver {
  @Query(_returns => [Teacher], {
    nullable: false,
    description: undefined
  })
  async teachers(@Ctx() ctx: any, @Args() args: FindManyTeacherArgs): Promise<Teacher[]> {
    return ctx.prisma.teacher.findMany(args);
  }
}
