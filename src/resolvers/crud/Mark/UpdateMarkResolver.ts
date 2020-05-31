import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Mark } from "../../../models/Mark";
import { UpdateMarkArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Mark)
export class UpdateMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Mark, {
    nullable: true,
    description: undefined,
  })
  async updateMark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateMarkArgs
  ): Promise<Mark | null | undefined> {
    return ctx.prisma.mark.update(args);
  }
}
