import * as TypeGraphQL from "type-graphql";
import { DeleteManySkillToStudentArgs } from "./args/DeleteManySkillToStudentArgs";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => SkillToStudent)
export class DeleteManySkillToStudentResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySkillToStudent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySkillToStudentArgs): Promise<BatchPayload> {
    return ctx.prisma.skillToStudent.deleteMany(args);
  }
}
