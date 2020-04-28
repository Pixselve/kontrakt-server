import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteManySkillToStudentArgs } from "./args/DeleteManySkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => SkillToStudent)
export class DeleteManySkillToStudentResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySkillToStudent(@Ctx() ctx: any, @Args() args: DeleteManySkillToStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.skillToStudent.deleteMany(args);
  }
}
