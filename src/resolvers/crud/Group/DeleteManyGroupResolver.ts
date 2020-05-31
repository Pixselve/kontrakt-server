import * as TypeGraphQL from "type-graphql";
import { DeleteManyGroupArgs } from "./args/DeleteManyGroupArgs";
import { Group } from "../../../models/Group";
import { BatchPayload } from "../../outputs/BatchPayload";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Group)
export class DeleteManyGroupResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyGroupArgs): Promise<BatchPayload> {
    return ctx.prisma.group.deleteMany(args);
  }
}
