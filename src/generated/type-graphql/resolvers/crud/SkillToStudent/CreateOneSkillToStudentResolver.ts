import * as TypeGraphQL from "type-graphql";
import { CreateOneSkillToStudentArgs } from "./args/CreateOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class CreateOneSkillToStudentResolver {
  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async createOneSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.create(args);
  }
}
