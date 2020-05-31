import * as TypeGraphQL from "type-graphql";
import { FindManySkillToStudentArgs } from "./args/FindManySkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class FindManySkillToStudentResolver {
  @TypeGraphQL.Query(_returns => [SkillToStudent], {
    nullable: false,
    description: undefined
  })
  async skillToStudents(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySkillToStudentArgs): Promise<SkillToStudent[]> {
    return ctx.prisma.skillToStudent.findMany(args);
  }
}
