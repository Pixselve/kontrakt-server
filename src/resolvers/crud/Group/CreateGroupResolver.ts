import * as TypeGraphQL from "type-graphql";
import { CreateGroupArgs } from "./args/CreateGroupArgs";
import { Group } from "../../../models/Group";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Group)
export class CreateGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Group, {
    nullable: false,
    description: undefined
  })
  async createGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateGroupArgs): Promise<Group> {
    return ctx.prisma.group.create(args);
  }
}
