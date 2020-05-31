import * as TypeGraphQL from "type-graphql";
import { DeleteGroupArgs } from "./args/DeleteGroupArgs";
import { Group } from "../../../models/Group";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Group)
export class DeleteGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Group, {
    nullable: true,
    description: undefined
  })
  async deleteGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteGroupArgs): Promise<Group | null | undefined> {
    return ctx.prisma.group.delete(args);
  }
}
