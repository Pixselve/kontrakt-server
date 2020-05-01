import * as TypeGraphQL from "type-graphql";

import { ColorSkillsStatusesArgs } from "./args/ColorSkillsStatusesArgs";
import { Color, SkillStatus }      from "../../models";

@TypeGraphQL.Resolver(_of => Color)
export class ColorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SkillStatus], {
    nullable: true,
    description: undefined,
  })
  async skillsStatuses(@TypeGraphQL.Root() color: Color, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ColorSkillsStatusesArgs): Promise<SkillStatus[] | null> {
    return ctx.prisma.color.findOne({
      where: {
        id: color.id,
      },
    }).skillsStatuses(args);
  }
}
