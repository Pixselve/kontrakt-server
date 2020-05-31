import * as TypeGraphQL from "type-graphql";
import { UpsertSkillToStudentArgs } from "./args/UpsertSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class UpsertSkillToStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async upsertSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.upsert(args);
  }
}
