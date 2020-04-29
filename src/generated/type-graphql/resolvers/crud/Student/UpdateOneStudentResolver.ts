import * as TypeGraphQL from "type-graphql";
import { UpdateOneStudentArgs } from "./args/UpdateOneStudentArgs";
import { Student } from "../../../models/Student";

@TypeGraphQL.Resolver(_of => Student)
export class UpdateOneStudentResolver {
  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async updateOneStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.update(args);
  }
}
