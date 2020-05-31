import * as TypeGraphQL from "type-graphql";

import { Skill } from "../../../models/Skill";
import { FindManySkillArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Skill)
export class FindManySkillResolver {
  @TypeGraphQL.Query((_returns) => [Skill], {
    nullable: false,
    description: undefined,
  })
  async skills(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindManySkillArgs
  ): Promise<Skill[]> {
    return ctx.prisma.skill.findMany(args);
  }
}
