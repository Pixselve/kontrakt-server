import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteManyStudentArgs } from "./args/DeleteManyStudentArgs";
import { Student } from "../../../models/Student";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Student)
export class DeleteManyStudentResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStudent(@Ctx() ctx: any, @Args() args: DeleteManyStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.student.deleteMany(args);
  }
}
