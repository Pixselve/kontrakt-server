import * as TypeGraphQL from "type-graphql";
import { Args, Ctx, Root } from "type-graphql";
import { StudentSkillToStudentsArgs } from "./args";
import { SkillToStudent, Student } from "../../models";
import { Context } from "../../../index";
import { Mark } from "../../enums";

@TypeGraphQL.Resolver((_of) => Student)
export class StudentRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [SkillToStudent], {
    nullable: true,
  })
  async skillToStudents(
    @Root() student: Student,
    @Ctx() { prisma }: Context,
    @Args() args: StudentSkillToStudentsArgs
  ): Promise<SkillToStudent[] | null> {
    const skills = await prisma.skill.findMany({
      where: {
        skillToStudents: { none: { student: { id: student.id } } },
      },
    });

    const skillToStudent = await prisma.student
      .findOne({
        where: {
          id: student.id,
        },
      })
      .skillsToStudent(args);

    return [
      ...skillToStudent,
      ...skills.map((skill) => ({
        id: parseInt(`${ student.id }${ skill.id }`),
        mark: Mark.TODO,
        skillId: skill.id,
        studentId: student.id
      })),
    ];
  }
}
