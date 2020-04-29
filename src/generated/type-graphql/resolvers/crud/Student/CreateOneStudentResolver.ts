import * as TypeGraphQL from "type-graphql";
import { CreateOneStudentArgs } from "./args/CreateOneStudentArgs";
import { Student } from "../../../models/Student";

@TypeGraphQL.Resolver(_of => Student)
export class CreateOneStudentResolver {
  @TypeGraphQL.Mutation(_returns => Student, {
    nullable: false,
    description: undefined
  })
  async createOneStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneStudentArgs): Promise<Student> {
    return ctx.prisma.student.create(args);
  }
}
