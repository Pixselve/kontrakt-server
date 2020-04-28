import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneSkillToStudentArgs } from "./args/CreateOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@Resolver(_of => SkillToStudent)
export class CreateOneSkillToStudentResolver {
  @Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async createOneSkillToStudent(@Ctx() ctx: any, @Args() args: CreateOneSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.create(args);
  }
}
