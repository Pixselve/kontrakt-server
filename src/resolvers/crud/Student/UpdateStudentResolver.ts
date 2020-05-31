import * as TypeGraphQL from "type-graphql";
import { UpdateStudentArgs } from "./args/UpdateStudentArgs";
import { Student } from "../../../models/Student";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Student)
export class UpdateStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async updateStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateStudentArgs): Promise<Student | null | undefined> {
    return ctx.prisma.student.update(args);
  }
}
