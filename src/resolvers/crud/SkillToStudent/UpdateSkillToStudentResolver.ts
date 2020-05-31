import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { SkillToStudent } from "../../../models/SkillToStudent";
import { UpdateSkillToStudentArgs } from "./args";

@TypeGraphQL.Resolver((_of) => SkillToStudent)
export class UpdateSkillToStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => SkillToStudent, {
    nullable: true,
    description: undefined,
  })
  async updateSkillToStudent(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateSkillToStudentArgs
  ): Promise<SkillToStudent | null | undefined> {
    return ctx.prisma.skillToStudent.update(args);
  }
}
