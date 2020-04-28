import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateManyTeacherArgs } from "./args/UpdateManyTeacherArgs";
import { Teacher } from "../../../models/Teacher";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Teacher)
export class UpdateManyTeacherResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTeacher(@Ctx() ctx: any, @Args() args: UpdateManyTeacherArgs): Promise<BatchPayload> {
    return ctx.prisma.teacher.updateMany(args);
  }
}
