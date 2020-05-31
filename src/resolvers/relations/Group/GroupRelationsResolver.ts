import * as TypeGraphQL from "type-graphql";
import { Contract } from "../../../models/Contract";
import { Group } from "../../../models/Group";
import { Student } from "../../../models/Student";
import { GroupContractsArgs } from "./args/GroupContractsArgs";
import { GroupStudentsArgs } from "./args/GroupStudentsArgs";

@TypeGraphQL.Resolver(_of => Group)
export class GroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Contract], {
    nullable: true,
    description: undefined,
  })
  async contracts(@TypeGraphQL.Root() group: Group, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GroupContractsArgs): Promise<Contract[] | null | undefined> {
    return ctx.prisma.group.findOne({
      where: {
        id: group.id,
      },
    }).contracts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Student], {
    nullable: true,
    description: undefined,
  })
  async students(@TypeGraphQL.Root() group: Group, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GroupStudentsArgs): Promise<Student[] | null | undefined> {
    return ctx.prisma.group.findOne({
      where: {
        id: group.id,
      },
    }).students(args);
  }
}
