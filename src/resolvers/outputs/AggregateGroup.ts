import * as TypeGraphQL from "type-graphql";
import { AggregateGroupCountArgs } from "./args/AggregateGroupCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateGroup {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  count(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: AggregateGroupCountArgs
  ) {
    return ctx.prisma.group.count(args);
  }
}
