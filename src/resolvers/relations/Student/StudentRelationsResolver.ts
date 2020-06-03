import * as TypeGraphQL from "type-graphql";
import { Group } from "../../../models/Group";
import { SkillToStudent, Student } from "../../../models";
import { StudentGroupsArgs, StudentSkillsToStudentArgs } from "./args";
import { Context } from "../../../index";

@TypeGraphQL.Resolver((_of) => Student)
export class StudentRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [SkillToStudent], {
    nullable: true,
    description: undefined,
  })
  async skillsToStudent(
    @TypeGraphQL.Root() student: Student,
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() args: StudentSkillsToStudentArgs
  ): Promise<SkillToStudent[] | null | undefined> {
    return ctx.prisma.student
      .findOne({
        where: {
          id: student.id,
        },
      })
      // @ts-ignore
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
