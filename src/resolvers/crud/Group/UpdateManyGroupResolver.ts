import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Group } from "../../../models/Group";
import { UpdateManyGroupArgs } from "./args";
import { BatchPayload } from "../../outputs";

@TypeGraphQL.Resolver((_of) => Group)
export class UpdateManyGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => BatchPayload, {
    nullable: false,
    description: undefined,
  })
  async updateManyGroup(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateManyGroupArgs
  ): Promise<BatchPayload> {
    return ctx.prisma.group.updateMany(args);
  }
}
