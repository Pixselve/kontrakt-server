import * as TypeGraphQL from "type-graphql";
import { Mark } from "../../../models/Mark";
import { SkillToStudent } from "../../../models/SkillToStudent";
import { MarkSkillsToStudentsArgs } from "./args/MarkSkillsToStudentsArgs";

@TypeGraphQL.Resolver(_of => Mark)
export class MarkRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SkillToStudent], {
    nullable: true,
    description: undefined,
  })
  async skillsToStudents(@TypeGraphQL.Root() mark: Mark, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MarkSkillsToStudentsArgs): Promise<SkillToStudent[] | null | undefined> {
    return ctx.prisma.mark.findOne({
      where: {
        value: mark.value,
      },
    }).skillsToStudents(args);
  }
}
