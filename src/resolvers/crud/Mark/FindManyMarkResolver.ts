import * as TypeGraphQL from "type-graphql";

import { Mark } from "../../../models/Mark";
import { FindManyMarkArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Mark)
export class FindManyMarkResolver {
  @TypeGraphQL.Query((_returns) => [Mark], {
    nullable: false,
    description: undefined,
  })
  async marks(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindManyMarkArgs
  ): Promise<Mark[]> {
    return ctx.prisma.mark.findMany(args);
  }
}
