import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { Student } from "../../../models/Student";
import { StudentSkillToStudentsArgs } from "./args/StudentSkillToStudentsArgs";

@Resolver(_of => Student)
export class StudentRelationsResolver {
  @FieldResolver(_type => [SkillToStudent], {
    nullable: true,
    description: undefined,
  })
  async skillToStudents(@Root() student: Student, @Ctx() ctx: any, @Args() args: StudentSkillToStudentsArgs): Promise<SkillToStudent[] | null> {
    return ctx.prisma.student.findOne({
      where: {
        id: student.id,
      },
    }).skillToStudents(args);
  }
}
