import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../../index";
import { Student } from "../../models/Student";
import { Group } from "../../models/Group";

@Resolver(Group)
export default class FindManyGroupResolver {
  @Query((returns) => [Group])
  groups(@Ctx() { prisma }: Context) {
    return prisma.group.findMany();
  }
}
