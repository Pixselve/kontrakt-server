import * as TypeGraphQL from "type-graphql";
import { DeleteOneStudentArgs } from "./args/DeleteOneStudentArgs";
import { Student } from "../../../models/Student";

@TypeGraphQL.Resolver(_of => Student)
export class DeleteOneStudentResolver {
  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: true,
    description: undefined
  })
  async deleteOneStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneStudentArgs): Promise<Student | null> {
    return ctx.prisma.student.delete(args);
  }
}
