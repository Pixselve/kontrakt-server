import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../../index";
import { Mark } from "../../models/Mark";

@Resolver(Mark)
export default class FindManyMarkResolver {
  @Query((returns) => [Mark])
  async marks(@Ctx() { prisma }: Context) {
    return prisma.mark.findMany();
  }
}
