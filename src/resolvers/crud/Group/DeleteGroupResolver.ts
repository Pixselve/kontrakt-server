import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";

import { Group } from "../../../models/Group";
import { DeleteGroupArgs } from "./args";

@TypeGraphQL.Resolver((_of) => Group)
export class DeleteGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation((_returns) => Group, {
    nullable: true,
    description: undefined,
  })
  async deleteGroup(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteGroupArgs
  ): Promise<Group | null | undefined> {
    return ctx.prisma.group.delete(args);
  }
}
