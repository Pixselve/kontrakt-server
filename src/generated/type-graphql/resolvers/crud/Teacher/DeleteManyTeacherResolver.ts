import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteManyTeacherArgs } from "./args/DeleteManyTeacherArgs";
import { Teacher } from "../../../models/Teacher";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Teacher)
export class DeleteManyTeacherResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTeacher(@Ctx() ctx: any, @Args() args: DeleteManyTeacherArgs): Promise<BatchPayload> {
    return ctx.prisma.teacher.deleteMany(args);
  }
}
