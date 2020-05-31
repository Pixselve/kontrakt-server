import * as TypeGraphQL from "type-graphql";
import { UpdateMarkArgs } from "./args/UpdateMarkArgs";
import { Mark } from "../../../models/Mark";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Mark)
export class UpdateMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Mark, {
    nullable: true,
    description: undefined
  })
  async updateMark(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMarkArgs): Promise<Mark | null | undefined> {
    return ctx.prisma.mark.update(args);
  }
}
