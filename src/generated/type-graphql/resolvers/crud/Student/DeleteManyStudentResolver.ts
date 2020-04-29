import * as TypeGraphQL from "type-graphql";
import { DeleteManyStudentArgs } from "./args/DeleteManyStudentArgs";
import { Student } from "../../../models/Student";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Student)
export class DeleteManyStudentResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.student.deleteMany(args);
  }
}
