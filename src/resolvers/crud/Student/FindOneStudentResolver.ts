import * as TypeGraphQL from "type-graphql";

import { Student } from "../../../models/Student";
import { FindOneStudentArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Student)
export class FindOneStudentResolver {
  @TypeGraphQL.Query((_returns) => Student, {
    nullable: true,
    description: undefined,
  })
  async student(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOneStudentArgs
  ): Promise<Student | null | undefined> {
    return ctx.prisma.student.findOne(args);
  }
}
