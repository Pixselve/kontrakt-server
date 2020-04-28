import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindOneSkillToStudentArgs } from "./args/FindOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@Resolver(_of => SkillToStudent)
export class FindOneSkillToStudentResolver {
  @Query(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async skillToStudent(@Ctx() ctx: any, @Args() args: FindOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.findOne(args);
  }
}
