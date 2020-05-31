import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Group } from "../../../models/Group";
import { UpdateGroupArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Group)
export class UpdateGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Group, {
    nullable: true,
    description: undefined,
  })
  async updateGroup(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateGroupArgs
  ): Promise<Group | null | undefined> {
    return ctx.prisma.group.update(args);
  }
}
