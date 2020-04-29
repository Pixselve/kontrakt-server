import * as TypeGraphQL from "type-graphql";
import { UpdateOneTeacherArgs } from "./args/UpdateOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@TypeGraphQL.Resolver(_of => Teacher)
export class UpdateOneTeacherResolver {
  @TypeGraphQL.Mutation(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async updateOneTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.update(args);
  }
}
