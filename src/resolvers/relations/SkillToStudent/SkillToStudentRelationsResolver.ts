import * as TypeGraphQL from "type-graphql";
import { Mark } from "../../../models/Mark";
import { Skill } from "../../../models/Skill";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { Student } from "../../../models/Student";
import { Context } from "../../../index";

@TypeGraphQL.Resolver((_of) => SkillToStudent)
export class SkillToStudentRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Mark, {
    nullable: true,
    description: undefined,
  })
  async mark(
    @TypeGraphQL.Root() skillToStudent: SkillToStudent,
    @TypeGraphQL.Ctx() ctx: Context
  ): Promise<Mark | null> {
    return ctx.prisma.skillToStudent
      .findOne({
        where: {
          studentId_skillId: {
            skillId: skillToStudent.skillId,
            studentId: skillToStudent.studentId
          }
        },
      })
      .mark({});
  }

  @TypeGraphQL.FieldResolver((_type) => Skill, {
    nullable: false,
    description: undefined,
  })
  async skill(
    @TypeGraphQL.Root() skillToStudent: SkillToStudent,
    @TypeGraphQL.Ctx() ctx: any
  ): Promise<Skill> {
    return ctx.prisma.skillToStudent
      .findOne({
        where: {
          studentId_skillId: {
            skillId: skillToStudent.skillId,
            studentId: skillToStudent.studentId,
          },
        },
      })
      .skill({});
  }

  @TypeGraphQL.FieldResolver((_type) => Student, {
    nullable: false,
    description: undefined,
  })
  async student(
    @TypeGraphQL.Root() skillToStudent: SkillToStudent,
    @TypeGraphQL.Ctx() ctx: any
  ): Promise<Student> {
    return ctx.prisma.skillToStudent
      .findOne({
        where: {
          studentId_skillId: {
            skillId: skillToStudent.skillId,
            studentId: skillToStudent.studentId,
          },
        },
      })
      .student({});
  }
}
