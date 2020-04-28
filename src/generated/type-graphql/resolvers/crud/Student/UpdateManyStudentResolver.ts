import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateManyStudentArgs } from "./args/UpdateManyStudentArgs";
import { Student } from "../../../models/Student";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Student)
export class UpdateManyStudentResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStudent(@Ctx() ctx: any, @Args() args: UpdateManyStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.student.updateMany(args);
  }
}
