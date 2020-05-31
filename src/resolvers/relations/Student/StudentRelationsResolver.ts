import * as TypeGraphQL from "type-graphql";
import { Group } from "../../../models/Group";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { Student } from "../../../models/Student";
import { StudentGroupsArgs } from "./args/StudentGroupsArgs";
import { StudentSkillsToStudentArgs } from "./args/StudentSkillsToStudentArgs";

@TypeGraphQL.Resolver((_of) => Student)
export class StudentRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [SkillToStudent], {
    nullable: true,
    description: undefined,
  })
  async skillsToStudent(
    @TypeGraphQL.Root() student: Student,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: StudentSkillsToStudentArgs
  ): Promise<SkillToStudent[] | null | undefined> {
    return ctx.prisma.student
      .findOne({
        where: {
          id: student.id,
        },
      })
      .skillsToStudent(args);
  }

  @TypeGraphQL.FieldResolver((_type) => [Group], {
    nullable: true,
    description: undefined,
  })
  async groups(
    @TypeGraphQL.Root() student: Student,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: StudentGroupsArgs
  ): Promise<Group[] | null | undefined> {
    return ctx.prisma.student
      .findOne({
        where: {
          id: student.id,
        },
      })
      .groups(args);
  }
}
