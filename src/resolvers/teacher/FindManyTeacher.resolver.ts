import { Ctx, Query, Resolver } from "type-graphql";
import { Teacher } from "../../models/Teacher";
import { Context } from "../../index";

@Resolver(Teacher)
export default class FindManyTeacherResolver {
  @Query((returns) => [Teacher])
  async teachers(@Ctx() { prisma }: Context): Promise<Teacher[]> {
    return await prisma.teacher.findMany({});
  }
}
