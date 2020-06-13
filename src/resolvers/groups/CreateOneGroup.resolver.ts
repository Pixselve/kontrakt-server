import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Group } from "../../models/Group";
import { Context } from "../../index";
import { CreateOneGroupInput } from "./input/CreateOneGroup.input";

@Resolver(Group)
export default class CreateOneGroupResolver {
  @Mutation((returns) => Group)
  @Authorized("TEACHER")
  async createOneGroup(
    @Ctx() { prisma }: Context,
    @Arg("group") { name }: CreateOneGroupInput
  ) {
    return prisma.group.create({ data: { name } });
  }
}
