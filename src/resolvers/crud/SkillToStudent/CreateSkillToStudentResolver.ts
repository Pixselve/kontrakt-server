import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { SkillToStudent } from "../../../models/SkillToStudent";
import { CreateSkillToStudentArgs } from "./args";

@TypeGraphQL.Resolver((_of) => SkillToStudent)
export class CreateSkillToStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => SkillToStudent, {
    nullable: false,
    description: undefined,
  })
  async createSkillToStudent(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: CreateSkillToStudentArgs
  ): Promise<SkillToStudent> {
    return ctx.prisma.skillToStudent.create(args);
  }
}
