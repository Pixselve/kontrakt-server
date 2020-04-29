import * as TypeGraphQL from "type-graphql";
import { UpdateManyTeacherArgs } from "./args/UpdateManyTeacherArgs";
import { Teacher } from "../../../models/Teacher";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Teacher)
export class UpdateManyTeacherResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTeacherArgs): Promise<BatchPayload> {
    return ctx.prisma.teacher.updateMany(args);
  }
}
