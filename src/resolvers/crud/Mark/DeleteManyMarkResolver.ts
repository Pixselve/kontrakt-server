import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Mark } from "../../../models/Mark";
import { DeleteManyMarkArgs } from "./args";
import { BatchPayload } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Mark)
export class DeleteManyMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => BatchPayload, {
    nullable: false,
    description: undefined,
  })
  async deleteManyMark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteManyMarkArgs
  ): Promise<BatchPayload> {
    return ctx.prisma.mark.deleteMany(args);
  }
}
