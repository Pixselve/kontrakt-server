import * as TypeGraphQL from "type-graphql";

import { SkillToStudent } from "../../../models/SkillToStudent";
import { FindManySkillToStudentArgs } from "./args";

@TypeGraphQL.Resolver((_of) => SkillToStudent)
export class FindManySkillToStudentResolver {
  @TypeGraphQL.Query((_returns) => [SkillToStudent], {
    nullable: false,
    description: undefined,
  })
  async skillToStudents(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindManySkillToStudentArgs
  ): Promise<SkillToStudent[]> {
    return ctx.prisma.skillToStudent.findMany(args);
  }
}
