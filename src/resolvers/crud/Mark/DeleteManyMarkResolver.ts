import * as TypeGraphQL from "type-graphql";
import { DeleteManyMarkArgs } from "./args/DeleteManyMarkArgs";
import { Mark } from "../../../models/Mark";
import { BatchPayload } from "../../outputs/BatchPayload";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Mark)
export class DeleteManyMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyMark(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMarkArgs): Promise<BatchPayload> {
    return ctx.prisma.mark.deleteMany(args);
  }
}
