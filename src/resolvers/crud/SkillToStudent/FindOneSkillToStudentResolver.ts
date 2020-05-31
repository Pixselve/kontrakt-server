import * as TypeGraphQL from "type-graphql";

import { SkillToStudent } from "../../../models/SkillToStudent";
import { FindOneSkillToStudentArgs } from "./args";

@TypeGraphQL.Resolver((_of) => SkillToStudent)
export class FindOneSkillToStudentResolver {
  @TypeGraphQL.Query((_returns) => SkillToStudent, {
    nullable: true,
    description: undefined,
  })
  async skillToStudent(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOneSkillToStudentArgs
  ): Promise<SkillToStudent | null | undefined> {
    return ctx.prisma.skillToStudent.findOne(args);
  }
}
