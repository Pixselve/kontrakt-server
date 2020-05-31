import * as TypeGraphQL from "type-graphql";
import { UpsertGroupArgs } from "./args/UpsertGroupArgs";
import { Group } from "../../../models/Group";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Group)
export class UpsertGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Group, {
    nullable: false,
    description: undefined
  })
  async upsertGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertGroupArgs): Promise<Group> {
    return ctx.prisma.group.upsert(args);
  }
}
