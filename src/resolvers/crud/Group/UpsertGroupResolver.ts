import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Group } from "../../../models/Group";
import { UpsertGroupArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Group)
export class UpsertGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Group, {
    nullable: false,
    description: undefined,
  })
  async upsertGroup(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpsertGroupArgs
  ): Promise<Group> {
    return ctx.prisma.group.upsert(args);
  }
}
