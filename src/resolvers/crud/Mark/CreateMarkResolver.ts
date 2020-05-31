import * as TypeGraphQL from "type-graphql";
import { CreateMarkArgs } from "./args/CreateMarkArgs";
import { Mark } from "../../../models/Mark";
import { Authorized } from "type-graphql";

@TypeGraphQL.Resolver(_of => Mark)
export class CreateMarkResolver {
  @Authorized("TEACHER")
  @TypeGraphQL.Mutation(_returns => Mark, {
    nullable: false,
    description: undefined
  })
  async createMark(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMarkArgs): Promise<Mark> {
    return ctx.prisma.mark.create(args);
  }
}
