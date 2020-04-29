import * as TypeGraphQL from "type-graphql";
import { UpsertOneTeacherArgs } from "./args/UpsertOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@TypeGraphQL.Resolver(_of => Teacher)
export class UpsertOneTeacherResolver {
  @TypeGraphQL.Mutation(_returns => Teacher, {
    nullable: false,
    description: undefined
  })
  async upsertOneTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneTeacherArgs): Promise<Teacher> {
    return ctx.prisma.teacher.upsert(args);
  }
}
