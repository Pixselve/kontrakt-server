import * as TypeGraphQL from "type-graphql";
import { DeleteStudentArgs } from "./args/DeleteStudentArgs";
import { Student } from "../../../models/Student";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Student)
export class DeleteStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async deleteStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteStudentArgs): Promise<Student | null | undefined> {
    return ctx.prisma.student.delete(args);
  }
}
