import * as TypeGraphQL from "type-graphql";

import { Group } from "../../../models/Group";
import { FindManyGroupArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Group)
export class FindManyGroupResolver {
  @TypeGraphQL.Query((_returns) => [Group], {
    nullable: false,
    description: undefined,
  })
  async groups(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindManyGroupArgs
  ): Promise<Group[]> {
    return ctx.prisma.group.findMany(args);
  }
}
