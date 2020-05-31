import * as TypeGraphQL from "type-graphql";
import { UpdateManyGroupArgs } from "./args/UpdateManyGroupArgs";
import { Group } from "../../../models/Group";
import { BatchPayload } from "../../outputs/BatchPayload";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Group)
export class UpdateManyGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyGroupArgs): Promise<BatchPayload> {
    return ctx.prisma.group.updateMany(args);
  }
}
