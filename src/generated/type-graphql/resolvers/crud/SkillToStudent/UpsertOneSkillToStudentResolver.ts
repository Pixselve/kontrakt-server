import * as TypeGraphQL from "type-graphql";
import { UpsertOneSkillToStudentArgs } from "./args/UpsertOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class UpsertOneSkillToStudentResolver {
  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async upsertOneSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.upsert(args);
  }
}
