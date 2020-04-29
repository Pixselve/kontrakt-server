import * as TypeGraphQL from "type-graphql";
import { FindOneTeacherArgs } from "./args/FindOneTeacherArgs";
import { Teacher } from "../../../models/Teacher";

@TypeGraphQL.Resolver(_of => Teacher)
export class FindOneTeacherResolver {
  @TypeGraphQL.Query(_returns => Teacher, {
    nullable: true,
    description: undefined
  })
  async teacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTeacherArgs): Promise<Teacher | null> {
    return ctx.prisma.teacher.findOne(args);
  }
}
