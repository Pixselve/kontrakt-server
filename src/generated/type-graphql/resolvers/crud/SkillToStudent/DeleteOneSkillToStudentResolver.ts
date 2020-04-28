import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteOneSkillToStudentArgs } from "./args/DeleteOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@Resolver(_of => SkillToStudent)
export class DeleteOneSkillToStudentResolver {
  @Mutation(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkillToStudent(@Ctx() ctx: any, @Args() args: DeleteOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.delete(args);
  }
}
