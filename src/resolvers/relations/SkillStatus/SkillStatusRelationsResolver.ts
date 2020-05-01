import * as TypeGraphQL       from "type-graphql";
import { Color, SkillStatus } from "../../models";

@TypeGraphQL.Resolver(_of => SkillStatus)
export class SkillStatusRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Color, {
    nullable: false,
    description: undefined,
  })
  async color(@TypeGraphQL.Root() skillStatus: SkillStatus, @TypeGraphQL.Ctx() ctx: any): Promise<Color> {
    return ctx.prisma.skillStatus.findOne({
      where: {
        id: skillStatus.id,
      },
    }).color({});
  }
}
