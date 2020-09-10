import { Ctx, Int, Query, Resolver } from "type-graphql";
import { Context } from "../index";

@Resolver()
export default class StatusResolver {
  @Query((returns) => Int)
  async status(@Ctx() { prisma }: Context) {
    try {
      const result = await Promise.race([
        prisma.student.count(),
        new Promise((resolve) => setTimeout(resolve, 500, new Error("timeout"))),
      ]);
      if (result instanceof Error) {
        throw result;
      }
      return 1;
    } catch (err) {
      return 0;
    }
  }
}
