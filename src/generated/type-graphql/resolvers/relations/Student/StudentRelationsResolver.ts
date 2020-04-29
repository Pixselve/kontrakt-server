import * as TypeGraphQL from "type-graphql";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { Student } from "../../../models/Student";
import { StudentSkillToStudentsArgs } from "./args/StudentSkillToStudentsArgs";

@TypeGraphQL.Resolver(_of => Student)
export class StudentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SkillToStudent], {
    nullable: true,
    description: undefined,
  })
  async skillToStudents(@TypeGraphQL.Root() student: Student, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StudentSkillToStudentsArgs): Promise<SkillToStudent[] | null> {
    return ctx.prisma.student.findOne({
      where: {
        id: student.id,
      },
    }).skillToStudents(args);
  }
}
