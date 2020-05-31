import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Group } from "../../../models/Group";
import { BatchPayload } from "../../outputs";
import { DeleteManyGroupArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Group)
export class DeleteManyGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => BatchPayload, {
    nullable: false,
    description: undefined,
  })
  async deleteManyGroup(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteManyGroupArgs
  ): Promise<BatchPayload> {
    return ctx.prisma.group.deleteMany(args);
  }
}
