import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Mark } from "../../../models/Mark";
import { UpdateManyMarkArgs } from "./args";
import { BatchPayload } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Mark)
export class UpdateManyMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => BatchPayload, {
    nullable: false,
    description: undefined,
  })
  async updateManyMark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateManyMarkArgs
  ): Promise<BatchPayload> {
    return ctx.prisma.mark.updateMany(args);
  }
}
