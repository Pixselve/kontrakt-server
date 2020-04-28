import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateOneSkillToStudentArgs } from "./args/UpdateOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@Resolver(_of => SkillToStudent)
export class UpdateOneSkillToStudentResolver {
  @Mutation(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async updateOneSkillToStudent(@Ctx() ctx: any, @Args() args: UpdateOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.update(args);
  }
}
