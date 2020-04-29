import * as TypeGraphQL from "type-graphql";
import { UpsertOneStudentArgs } from "./args/UpsertOneStudentArgs";
import { Student } from "../../../models/Student";

@TypeGraphQL.Resolver(_of => Student)
export class UpsertOneStudentResolver {
  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: false,
    description: undefined
  })
  async upsertOneStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneStudentArgs): Promise<Student> {
    return ctx.prisma.student.upsert(args);
  }
}
