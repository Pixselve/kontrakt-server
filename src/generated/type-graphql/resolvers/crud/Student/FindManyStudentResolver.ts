import * as TypeGraphQL from "type-graphql";
import { FindManyStudentArgs } from "./args/FindManyStudentArgs";
import { Student } from "../../../models/Student";

@TypeGraphQL.Resolver(_of => Student)
export class FindManyStudentResolver {
  @TypeGraphQL.Query(_returns => [Student], {
    nullable: false,
    description: undefined
  })
  async students(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStudentArgs): Promise<Student[]> {
    return ctx.prisma.student.findMany(args);
  }
}
