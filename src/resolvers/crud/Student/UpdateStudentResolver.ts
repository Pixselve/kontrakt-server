import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Student } from "../../../models/Student";
import { UpdateStudentArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Student)
export class UpdateStudentResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Student, {
    nullable: true,
    description: undefined,
  })
  async updateStudent(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateStudentArgs
  ): Promise<Student | null | undefined> {
    return ctx.prisma.student.update(args);
  }
}
