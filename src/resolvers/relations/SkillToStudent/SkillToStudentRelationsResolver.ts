import * as TypeGraphQL                   from "type-graphql";
import { Skill, SkillToStudent, Student } from "../../models";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class SkillToStudentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Skill, {
    nullable: false,
    description: undefined,
  })
  async skill(@TypeGraphQL.Root() skillToStudent: SkillToStudent, @TypeGraphQL.Ctx() ctx: any): Promise<Skill> {
    return ctx.prisma.skillToStudent.findOne({
      where: {
        id: skillToStudent.id,
      },
    }).skill({});
  }

  @TypeGraphQL.FieldResolver(_type => Student, {
    nullable: false,
    description: undefined,
  })
  async student(@TypeGraphQL.Root() skillToStudent: SkillToStudent, @TypeGraphQL.Ctx() ctx: any): Promise<Student> {
    return ctx.prisma.skillToStudent.findOne({
      where: {
        id: skillToStudent.id,
      },
    }).student({});
  }
}
