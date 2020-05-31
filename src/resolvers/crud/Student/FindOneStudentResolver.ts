import * as TypeGraphQL from "type-graphql";
import { FindOneStudentArgs } from "./args/FindOneStudentArgs";
import { Student } from "../../../models/Student";

@TypeGraphQL.Resolver(_of => Student)
export class FindOneStudentResolver {
  @TypeGraphQL.Query(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async student(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStudentArgs): Promise<Student | null | undefined> {
    return ctx.prisma.student.findOne(args);
  }
}
