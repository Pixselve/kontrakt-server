import * as TypeGraphQL from "type-graphql";
import { UpdateGroupArgs } from "./args/UpdateGroupArgs";
import { Group } from "../../../models/Group";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Group)
export class UpdateGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Group, {
    nullable: true,
    description: undefined
  })
  async updateGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateGroupArgs): Promise<Group | null | undefined> {
    return ctx.prisma.group.update(args);
  }
}
