import * as TypeGraphQL from "type-graphql";
import { DeleteSkillToStudentArgs } from "./args/DeleteSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class DeleteSkillToStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async deleteSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSkillToStudentArgs): Promise<SkillToStudent | null | undefined> {
    return ctx.prisma.skillToStudent.delete(args);
  }
}
