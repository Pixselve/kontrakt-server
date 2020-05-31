import * as TypeGraphQL from "type-graphql";
import { DeleteMarkArgs } from "./args/DeleteMarkArgs";
import { Mark } from "../../../models/Mark";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Mark)
export class DeleteMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Mark, {
    nullable: true,
    description: undefined
  })
  async deleteMark(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMarkArgs): Promise<Mark | null | undefined> {
    return ctx.prisma.mark.delete(args);
  }
}
