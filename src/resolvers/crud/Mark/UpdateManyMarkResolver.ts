import * as TypeGraphQL from "type-graphql";
import { UpdateManyMarkArgs } from "./args/UpdateManyMarkArgs";
import { Mark } from "../../../models/Mark";
import { BatchPayload } from "../../outputs/BatchPayload";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Mark)
export class UpdateManyMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyMark(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMarkArgs): Promise<BatchPayload> {
    return ctx.prisma.mark.updateMany(args);
  }
}
