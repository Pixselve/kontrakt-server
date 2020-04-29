import * as TypeGraphQL from "type-graphql";
import { DeleteOneSkillToStudentArgs } from "./args/DeleteOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class DeleteOneSkillToStudentResolver {
  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async deleteOneSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneSkillToStudentArgs): Promise<SkillToStudent | null> {
    return ctx.prisma.skillToStudent.delete(args);
  }
}
