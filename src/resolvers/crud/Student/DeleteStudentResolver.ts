import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Student } from "../../../models/Student";
import { DeleteStudentArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Student)
export class DeleteStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Student, {
    nullable: true,
    description: undefined,
  })
  async deleteStudent(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteStudentArgs
  ): Promise<Student | null | undefined> {
    return ctx.prisma.student.delete(args);
  }
}
