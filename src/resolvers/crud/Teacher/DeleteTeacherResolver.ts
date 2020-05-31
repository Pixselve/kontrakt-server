import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Teacher } from "../../../models/Teacher";
import { DeleteTeacherArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Teacher)
export class DeleteTeacherResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Teacher, {
    nullable: true,
    description: undefined,
  })
  async deleteTeacher(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteTeacherArgs
  ): Promise<Teacher | null | undefined> {
    return ctx.prisma.teacher.delete(args);
  }
}
