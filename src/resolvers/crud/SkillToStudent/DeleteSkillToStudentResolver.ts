import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { SkillToStudent } from "../../../models/SkillToStudent";
import { DeleteSkillToStudentArgs } from "./args";

@TypeGraphQL.Resolver((_of) => SkillToStudent)
export class DeleteSkillToStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => SkillToStudent, {
    nullable: true,
    description: undefined,
  })
  async deleteSkillToStudent(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteSkillToStudentArgs
  ): Promise<SkillToStudent | null | undefined> {
    return ctx.prisma.skillToStudent.delete(args);
  }
}
