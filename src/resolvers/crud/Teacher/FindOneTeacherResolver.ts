import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";
import { Teacher } from "../../../models";
import { FindOneTeacherArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Teacher)
export class FindOneTeacherResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Query((_returns) => Teacher, {
    nullable: true,
    description: undefined,
  })
  async teacher(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOneTeacherArgs
  ): Promise<Teacher | null | undefined> {
    return ctx.prisma.teacher.findOne(args);
  }
}
