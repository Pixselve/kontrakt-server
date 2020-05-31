import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Mark } from "../../../models/Mark";
import { UpsertMarkArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Mark)
export class UpsertMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Mark, {
    nullable: false,
    description: undefined,
  })
  async upsertMark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpsertMarkArgs
  ): Promise<Mark> {
    return ctx.prisma.mark.upsert(args);
  }
}
