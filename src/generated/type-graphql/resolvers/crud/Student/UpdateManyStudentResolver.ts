import * as TypeGraphQL from "type-graphql";
import { UpdateManyStudentArgs } from "./args/UpdateManyStudentArgs";
import { Student } from "../../../models/Student";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Student)
export class UpdateManyStudentResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.student.updateMany(args);
  }
}
