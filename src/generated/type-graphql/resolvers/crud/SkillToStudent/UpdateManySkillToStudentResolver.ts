import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateManySkillToStudentArgs } from "./args/UpdateManySkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => SkillToStudent)
export class UpdateManySkillToStudentResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySkillToStudent(@Ctx() ctx: any, @Args() args: UpdateManySkillToStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.skillToStudent.updateMany(args);
  }
}
