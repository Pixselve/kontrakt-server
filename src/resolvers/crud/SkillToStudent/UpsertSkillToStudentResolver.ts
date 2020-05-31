import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { SkillToStudent } from "../../../models/SkillToStudent";
import { UpsertSkillToStudentArgs } from "./args";

@TypeGraphQL.Resolver((_of) => SkillToStudent)
export class UpsertSkillToStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => SkillToStudent, {
    nullable: false,
    description: undefined,
  })
  async upsertSkillToStudent(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpsertSkillToStudentArgs
  ): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.upsert(args);
  }
}
