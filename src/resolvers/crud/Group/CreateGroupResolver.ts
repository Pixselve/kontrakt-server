import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Group } from "../../../models/Group";
import { GroupCreateInput } from "../../inputs";
import { Context } from "../../../index";

@TypeGraphQL.Resolver((_of) => Group)
export class CreateGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Group, {
    nullable: false,
    description: undefined,
  })
  async createGroup(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Arg("data") data: GroupCreateInput
  ): Promise<Group> {
    // @ts-ignore
    return ctx.prisma.group.create({ data });
  }
}
