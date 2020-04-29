import * as TypeGraphQL from "type-graphql";
import { CreateOneTeacherArgs } from "./args/CreateOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@TypeGraphQL.Resolver(_of => Teacher)
export class CreateOneTeacherResolver {
  @TypeGraphQL.Mutation(_returns => Teacher, {
    nullable: false,
    description: undefined
  })
  async createOneTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneTeacherArgs): Promise<Teacher> {
    return ctx.prisma.teacher.create(args);
  }
}
