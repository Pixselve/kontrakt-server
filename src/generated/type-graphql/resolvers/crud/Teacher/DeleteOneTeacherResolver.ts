import * as TypeGraphQL from "type-graphql";
import { DeleteOneTeacherArgs } from "./args/DeleteOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@TypeGraphQL.Resolver(_of => Teacher)
export class DeleteOneTeacherResolver {
  @TypeGraphQL.Mutation(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async deleteOneTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.delete(args);
  }
}
