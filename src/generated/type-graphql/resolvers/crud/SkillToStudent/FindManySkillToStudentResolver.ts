import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindManySkillToStudentArgs } from "./args/FindManySkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@Resolver(_of => SkillToStudent)
export class FindManySkillToStudentResolver {
  @Query(_returns => [SkillToStudent], {
    nullable: false,
    description: undefined
  })
  async skillToStudents(@Ctx() ctx: any, @Args() args: FindManySkillToStudentArgs): Promise<SkillToStudent[]> {
    return ctx.prisma.skillToStudent.findMany(args);
  }
}
