import * as TypeGraphQL from "type-graphql";
import { UpdateManySkillToStudentArgs } from "./args/UpdateManySkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class UpdateManySkillToStudentResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySkillToStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.skillToStudent.updateMany(args);
  }
}
