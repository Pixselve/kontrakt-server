import * as TypeGraphQL from "type-graphql";
import { DeleteManyTeacherArgs } from "./args/DeleteManyTeacherArgs";
import { Teacher } from "../../../models/Teacher";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Teacher)
export class DeleteManyTeacherResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTeacher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTeacherArgs): Promise<BatchPayload> {
    return ctx.prisma.teacher.deleteMany(args);
  }
}
