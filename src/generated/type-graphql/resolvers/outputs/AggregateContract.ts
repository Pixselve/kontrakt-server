import * as TypeGraphQL from "type-graphql";
import { AggregateContractCountArgs } from "./args/AggregateContractCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateContract {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateContractCountArgs) {
    return ctx.prisma.contract.count(args);
  }
}
