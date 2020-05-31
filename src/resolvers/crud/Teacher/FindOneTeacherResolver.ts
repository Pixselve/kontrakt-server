import * as TypeGraphQL from "type-graphql";
import { FindOneTeacherArgs } from "./args/FindOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Teacher)
export class FindOneTeacherResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Query(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async teacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTeacherArgs): Promise<Teacher | null | undefined> {
    return ctx.prisma.teacher.findOne(args);
  }
}
