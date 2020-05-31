import * as TypeGraphQL from "type-graphql";
import { FindManyTeacherArgs } from "./args/FindManyTeacherArgs";
import { Teacher } from "../../../models/Teacher";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Teacher)
export class FindManyTeacherResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Query(_returns => [Teacher], {
    nullable: false,
    description: undefined
  })
  async teachers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTeacherArgs): Promise<Teacher[]> {
    return ctx.prisma.teacher.findMany(args);
  }
}
