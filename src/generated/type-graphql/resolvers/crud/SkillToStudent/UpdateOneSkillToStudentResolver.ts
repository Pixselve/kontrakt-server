import * as TypeGraphQL from "type-graphql";
import { UpdateOneSkillToStudentArgs } from "./args/UpdateOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class UpdateOneSkillToStudentResolver {
  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async updateOneSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.update(args);
  }
}
