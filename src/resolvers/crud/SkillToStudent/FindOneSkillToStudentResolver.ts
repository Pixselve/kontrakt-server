import * as TypeGraphQL from "type-graphql";
import { FindOneSkillToStudentArgs } from "./args/FindOneSkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class FindOneSkillToStudentResolver {
  @TypeGraphQL.Query(_returns => SkillToStudent, {
    nullable: true,
    description: undefined
  })
  async skillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneSkillToStudentArgs): Promise<SkillToStudent | null | undefined> {
    return ctx.prisma.skillToStudent.findOne(args);
  }
}
