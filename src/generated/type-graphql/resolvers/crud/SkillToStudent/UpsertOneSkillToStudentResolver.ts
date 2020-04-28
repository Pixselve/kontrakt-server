import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpsertOneSkillToStudentArgs } from "./args/UpsertOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@Resolver(_of => SkillToStudent)
export class UpsertOneSkillToStudentResolver {
  @Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async upsertOneSkillToStudent(@Ctx() ctx: any, @Args() args: UpsertOneSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.upsert(args);
  }
}
