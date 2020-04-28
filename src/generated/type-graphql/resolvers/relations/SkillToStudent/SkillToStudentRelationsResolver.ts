import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Skill } from "../../../models/Skill";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { Student } from "../../../models/Student";

@Resolver(_of => SkillToStudent)
export class SkillToStudentRelationsResolver {
  @FieldResolver(_type => Skill, {
    nullable: false,
    description: undefined,
  })
  async skill(@Root() skillToStudent: SkillToStudent, @Ctx() ctx: any): Promise<Skill> {
    return ctx.prisma.skillToStudent.findOne({
      where: {
        id: skillToStudent.id,
      },
    }).skill({});
  }

  @FieldResolver(_type => Student, {
    nullable: false,
    description: undefined,
  })
  async student(@Root() skillToStudent: SkillToStudent, @Ctx() ctx: any): Promise<Student> {
    return ctx.prisma.skillToStudent.findOne({
      where: {
        id: skillToStudent.id,
      },
    }).student({});
  }
}
