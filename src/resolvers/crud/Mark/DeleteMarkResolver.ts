import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Mark } from "../../../models/Mark";
import { DeleteMarkArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Mark)
export class DeleteMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Mark, {
    nullable: true,
    description: undefined,
  })
  async deleteMark(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteMarkArgs
  ): Promise<Mark | null | undefined> {
    return ctx.prisma.mark.delete(args);
  }
}
