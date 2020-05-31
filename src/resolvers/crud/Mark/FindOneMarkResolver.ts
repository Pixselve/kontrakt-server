import * as TypeGraphQL from "type-graphql";
import { FindOneMarkArgs } from "./args/FindOneMarkArgs";
import { Mark } from "../../../models/Mark";

@TypeGraphQL.Resolver(_of => Mark)
export class FindOneMarkResolver {
  @TypeGraphQL.Query(_returns => Mark, {
    nullable: true,
    description: undefined
  })
  async mark(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneMarkArgs): Promise<Mark | null | undefined> {
    return ctx.prisma.mark.findOne(args);
  }
}
