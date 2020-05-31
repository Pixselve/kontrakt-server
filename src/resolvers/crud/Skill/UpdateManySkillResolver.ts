import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Skill } from "../../../models/Skill";
import { UpdateManySkillArgs } from "./args";
import { BatchPayload } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Skill)
export class UpdateManySkillResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => BatchPayload, {
    nullable: false,
    description: undefined,
  })
  async updateManySkill(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateManySkillArgs
  ): Promise<BatchPayload> {
    return ctx.prisma.skill.updateMany(args);
  }
}
