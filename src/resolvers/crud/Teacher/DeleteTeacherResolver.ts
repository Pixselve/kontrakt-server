import * as TypeGraphQL from "type-graphql";
import { DeleteTeacherArgs } from "./args/DeleteTeacherArgs";
import { Teacher } from "../../../models/Teacher";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Teacher)
export class DeleteTeacherResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async deleteTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTeacherArgs): Promise<Teacher | null | undefined> {
    return ctx.prisma.teacher.delete(args);
  }
}
