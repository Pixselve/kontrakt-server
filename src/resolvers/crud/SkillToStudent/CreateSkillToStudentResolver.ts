import * as TypeGraphQL from "type-graphql";
import { CreateSkillToStudentArgs } from "./args/CreateSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class CreateSkillToStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => SkillToStudent, {
    nullable: false,
    description: undefined
  })
  async createSkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSkillToStudentArgs): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.create(args);
  }
}
