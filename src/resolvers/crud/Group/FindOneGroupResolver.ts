import * as TypeGraphQL from "type-graphql";

import { Group } from "../../../models/Group";
import { FindOneGroupArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Group)
export class FindOneGroupResolver {
  @TypeGraphQL.Query((_returns) => Group, {
    nullable: true,
    description: undefined,
  })
  async group(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOneGroupArgs
  ): Promise<Group | null | undefined> {
    return ctx.prisma.group.findOne(args);
  }
}
