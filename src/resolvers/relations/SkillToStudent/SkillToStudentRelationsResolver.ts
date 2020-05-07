import * as TypeGraphQL from "type-graphql";
import { Skill, SkillToStudent, Student } from "../../models";
import { Context } from "../../../index";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class SkillToStudentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Skill, {
    nullable: true,
  })
  async skill(@TypeGraphQL.Root() skillToStudent: SkillToStudent, @TypeGraphQL.Ctx() { prisma }: Context): Promise<Skill | null> {
    return prisma.skill.findOne({ where: { id: skillToStudent.skillId } });
  }

  @TypeGraphQL.FieldResolver(_type => Student, {
    nullable: true,
    description: undefined,
  })
  async student(@TypeGraphQL.Root() skillToStudent: SkillToStudent, @TypeGraphQL.Ctx() { prisma }: Context): Promise<Student | null> {
    return prisma.student.findOne({ where: { id: skillToStudent.studentId } });
  }
}
